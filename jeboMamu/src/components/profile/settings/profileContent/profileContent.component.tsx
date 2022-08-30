import { FC, useState, useRef, ChangeEventHandler, useCallback } from 'react'
import Image from 'next/image'

import { useTranslation } from 'next-i18next'

import { useAppDispatch } from '@/redux/hooks'
import { setUser } from '@/redux/slices/auth.slice'

import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import { Size } from '@/components/types/textField.types'
import { useCallToAction } from '@/hooks/use-call-to-action/use-call-to-action'
import useUpload from '@/hooks/use-upload/use-upload'
import { useToast } from '@/hooks/use-toast/use-toast'
import TextField from '@/components/elements/TextField/textField.component'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import Separator from '@/components/elements/Separator/separator.component'
import Icon from '@/components/elements/Icon/icon.component'
import { ToastStyle } from '@/components/elements/Toasts/toast/toast.component'
import GoogleSvg from '@/assets/images/svg/google.svg'

import {
  UserResponse,
  useUpdateUserMutation,
  UpdateUserMutationVariables,
} from '@/graphql/generated'

interface Props {
  user: UserResponse
}

const MAX_PHOTO_SIZE = 2097152

const ProfileContent: FC<Props> = (props) => {
  const { user } = props

  const { t } = useTranslation('common')

  const dispatch = useAppDispatch()

  const [userUpdateData, setUserUpdateData] =
    useState<UpdateUserMutationVariables>({
      avatar_url: user.avatar_url,
      first_name: user.first_name,
      last_name: user.last_name,
    })

  const [avatarSrc, setAvatarSrc] = useState<string | undefined | null>(
    user.avatar_url
  )
  const [avatarSizeError, setAvatarSizeError] = useState<boolean>(false)
  const [avatarFile, setAvatarFile] = useState<File | undefined>()
  const imagePickerRef = useRef<HTMLInputElement>(null)

  const { upload } = useUpload()

  const [updateUser] = useUpdateUserMutation()

  const { addToast } = useToast()
  const toastUploadError = useCallback(
    () =>
      addToast({
        style: ToastStyle.error,
        title: t('submitting-user-data-error-msg'),
        className: 'text-center',
      }),
    [addToast, t]
  )
  const toastSuccess = useCallback(
    () =>
      addToast({
        style: ToastStyle.info,
        title: t('user-data-updated-msg'),
        className: 'text-center',
      }),
    [addToast, t]
  )

  const submitUpdateUser = async () => {
    let url = userUpdateData.avatar_url
    if (avatarFile) {
      url = await upload(avatarFile)

      setUserUpdateData((prev) => ({
        ...prev,
        avatar_url: url,
      }))
    }
    await updateUser({
      variables: { ...userUpdateData, avatar_url: url },
    }).then(() => {
      dispatch(
        setUser({
          ...user,
          first_name: userUpdateData.first_name ?? user.first_name,
          avatar_url: url,
        })
      )
    })
  }

  const {
    execute: submitUserSettings,
    isLoading,
    success,
  } = useCallToAction(submitUpdateUser, {
    onSuccessCallback: toastSuccess,
    onErrorCallback: toastUploadError,
  })

  const google_id = null

  const onImagePickerClick = () => {
    imagePickerRef.current?.click()
  }

  const handleImageSelected: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (!event.target.files) {
      return
    }

    const file = event.target.files[0]

    const reader = new FileReader()
    reader.onloadend = () => {
      setAvatarSrc(reader.result as string)
    }
    reader.readAsDataURL(file)

    if (file.size > MAX_PHOTO_SIZE) {
      setAvatarSizeError(true)
      return
    }

    setAvatarFile(file)
    setAvatarSizeError(false)
  }

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUserUpdateData((prev) => ({
      ...prev,
      first_name: event.target.value,
    }))
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 mt-8 rounded-full overflow-hidden relative">
        {avatarSrc ? (
          <Image
            src={avatarSrc}
            alt="User avatar"
            layout="fill"
            unoptimized
            className="object-cover"
            onError={() => setAvatarSrc(undefined)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl bg-gray-100 rounded-full">
            <Icon icon="User" />
          </div>
        )}
      </div>
      <div
        className="mt-2 text-xs text-gray-700 cursor-pointer hover:underline"
        onClick={onImagePickerClick}
      >
        {t('replace-profile-photo-label')}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageSelected}
        ref={imagePickerRef}
        hidden
      />
      {avatarSizeError && (
        <div className="pt-2 text-critical text-xs font-bold text-center">
          {t('photo-size-exceeded-error-msg')}
        </div>
      )}

      <div className="mt-4 self-stretch">
        <TextField
          defaultValue={user.first_name}
          value={userUpdateData.first_name ?? user.first_name}
          label={t('name-label')}
          elementSize={Size.large}
          onChange={handleNameChange}
        />
      </div>
      <div className="mt-2 self-stretch">
        <Button
          label={t('save-changes-action')}
          color={Colors.blue}
          style={
            isLoading
              ? ButtonStyle.loading
              : success
              ? ButtonStyle.success
              : ButtonStyle.solid
          }
          size={Sizes.lg}
          full
          onClick={submitUserSettings}
        />
      </div>
      <Separator size={Sizes.base} className="mt-8" />
      {google_id ? (
        <>
          <div className="mt-8 self-stretch">
            <Button
              label={t('connect-google-account-action')}
              style={ButtonStyle.solid}
              color={Colors.grey}
              size={Sizes.m}
              full
              outline
              IconComponent={() => (
                <div className="absolute left-0 pl-4">
                  <GoogleSvg />
                </div>
              )}
            />
          </div>
          <div className="mt-2 text-xs text-gray-700">
            {t('one-click-sign-in-msg')}
          </div>
        </>
      ) : (
        <>
          <div className="mt-8 self-stretch">
            <Button
              label={t('google-account-connected-label')}
              className="text-gray-500 !cursor-default"
              style={ButtonStyle.disabled}
              color={Colors.grey}
              size={Sizes.m}
              full
              outline
              IconComponent={() => (
                <div className="absolute left-0 pl-4">
                  <GoogleSvg />
                </div>
              )}
            />
          </div>
          <div className="mt-2 text-xs text-gray-700 hover:underline cursor-pointer">
            {t('remove-connection-to-email-msg')}{' '}
            <span className="font-bold">{user.email}</span>
          </div>
        </>
      )}
      <Separator size={Sizes.base} className="mt-6" />
      <div className="mt-8 text-sm">{t('delete-email-contact-msg')}</div>
    </div>
  )
}

export default ProfileContent
