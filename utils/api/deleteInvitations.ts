import { ACCESS_TOKEN } from '../temporaryToken';

export const deleteInvitations = async ({ dashboardId, invitationId }) => {
  const response = await fetch(
    `https://sp-taskify-api.vercel.app/14/dashboards/${dashboardId}/invitations/${invitationId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: ACCESS_TOKEN,
      },
    }
  );
  const result = await response.json();
};
