export function getSessionFromRequest(ctx: any) {
  const user = ctx?.res?.locals?.user || null

  if (!user) return {}

  return { user }
}
