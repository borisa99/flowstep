export function getCollectionBadgeIcon(badge?: string) {
  switch (badge) {
    case 'public':
      return 'Globe'
    case 'team':
      return 'Bag'
    default:
      return
  }
}

export function getCollectionBadgeLabel(badge?: string) {
  switch (badge) {
    case 'public':
      return 'Public'
    case 'team':
      return 'Team collection'
    default:
      return
  }
}
