import { ACCESS_TOKEN } from '../temporaryToken';

interface GetInvitationsProps {
  currentPage: number;
  showCount: number;
  dashboardId: number;
}

export const getInvitations = async ({ currentPage, showCount, dashboardId }: GetInvitationsProps) => {
  const query = `?page=${currentPage}&size=${showCount}`;
  const response = await fetch(`https://sp-taskify-api.vercel.app/14/dashboards/${dashboardId}/invitations${query}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: ACCESS_TOKEN,
    },
  });
  const result = response.json();
  return result;
};
