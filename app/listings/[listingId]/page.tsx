import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import getReservations from "@/app/actions/getReservations";

import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";

import ListingClient from "./ListingClient";
import { tr } from "date-fns/locale";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
<<<<<<< HEAD
  try {
=======
 try {
>>>>>>> 15a6e49b29af28effc26d787f5c673551e1c5199
    const listing = await getListingById(params);
    const reservations = await getReservations(params);
    const currentUser = await getCurrentUser();

    if (!listing) {
      return (
        <ClientOnly>
          <EmptyState />
        </ClientOnly>
      );
    }
    return (
      <ClientOnly>
        <ListingClient
          listing={listing}
          reservations={reservations}
          currentUser={currentUser}
        />
      </ClientOnly>
    );
  } catch (error) {
    console.error(error);
  }
<<<<<<< HEAD
=======
};
>>>>>>> 15a6e49b29af28effc26d787f5c673551e1c5199
};

export default ListingPage;
