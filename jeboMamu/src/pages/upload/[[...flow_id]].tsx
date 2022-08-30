import { useEffect } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import { useAppDispatch } from '@/redux/hooks'
import { resetObject, setObject } from '@/redux/slices/flow/flow.slice'
import { resetAppInfoObject } from '@/redux/slices/flow/flowAppInfo.slice'

import { RoleValue } from '@/types/RoleValue'
import UploadHeader from '@/components/upload/header/uploadHeader.component'
import UploadTabs from '@/components/upload/tabs/uploadTabs.component'

import {
  Flow_Attachments_Constraint,
  Flow_Attachments_Insert_Input,
  Flow_Attachments_Update_Column,
  Flow_Keywords_Constraint,
  Flow_Keywords_Insert_Input,
  Flow_Screencasts_Constraint,
  Flow_Screencasts_Insert_Input,
  Flow_Screencasts_Update_Column,
  Flow_Screenshots_Constraint,
  Flow_Screenshots_Insert_Input,
  Flow_Screenshots_Update_Column,
  useFlowByIdLazyQuery,
} from '@/graphql/generated'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['/upload/[[flow_id]]', '/upload'],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(
        context.locale || context.defaultLocale || 'en',
        ['upload', 'common']
      )),
    },
  }
}

const UploadPage: NextPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const { t } = useTranslation('upload')

  const [getFlowById] = useFlowByIdLazyQuery({
    context: {
      headers: {
        'x-hasura-role': RoleValue.PREMIUM,
      },
    },
  })
  useEffect(() => {
    const { flow_id } = router.query

    if (flow_id) {
      const flowById = async () => {
        const { data } = await getFlowById({
          variables: {
            id: flow_id[0],
          },
        })
        const flow = data?.flows_by_pk
        if (flow) {
          dispatch(
            setObject({
              id: flow?.id,
              title: flow?.title,
              avatar_url: flow?.avatar_url,
              avatar_background_color: flow?.avatar_background_color,
              is_draft: flow?.is_draft,
              flow_screencasts: {
                data: flow?.flow_screencasts as Flow_Screencasts_Insert_Input[],
                on_conflict: {
                  constraint: Flow_Screencasts_Constraint.FlowScreencastsPkey,
                  update_columns: [Flow_Screencasts_Update_Column.Title],
                },
              },
              flow_screenshots: {
                data: flow?.flow_screenshots as Flow_Screenshots_Insert_Input[],
                on_conflict: {
                  constraint: Flow_Screenshots_Constraint.FlowScreenshotsPkey,
                  update_columns: [Flow_Screenshots_Update_Column.Title],
                },
              },
              flow_keywords: {
                data: flow?.flow_keywords as Flow_Keywords_Insert_Input[],
                on_conflict: {
                  constraint: Flow_Keywords_Constraint.FlowKeywordsPkey,
                  update_columns: [],
                },
              },
              flow_attachments: {
                data: flow?.flow_attachments as Flow_Attachments_Insert_Input[],
                on_conflict: {
                  constraint: Flow_Attachments_Constraint.FlowAttachmentsPkey,
                  update_columns: [Flow_Attachments_Update_Column.Title],
                },
              },
            })
          )
        } else {
          router.push('/upload')
        }
      }
      flowById()
    } else {
      dispatch(resetObject())
      dispatch(resetAppInfoObject())
    }
  }, [router.query, getFlowById, dispatch, router])
  return (
    <>
      <Head>
        <title>Flowstep - {t('upload-title')}</title>
      </Head>
      <div className="mb-10">
        <UploadHeader />
        <UploadTabs />
      </div>
    </>
  )
}

export default UploadPage
