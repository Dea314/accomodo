import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";

const ListingPage = async () => {
  return (
    <ClientOnly>
      <EmptyState
        title="No favorites"
        subtitle="You don't have any favorites yet"
        /*   actionLabel="Browse listings"
        actionHref="/listings" */
      />
    </ClientOnly>
  );
};

export default ListingPage;
