import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
// useLoaderData : 가장 가까운 라우트의 loader 데이터를 가져오는 훅

function EventsPage() {
  const data = useLoaderData();
  if (data.isError) return <p>{data.message}</p>;

  const fetchedEvents = data.events;

  return (
    <>
      <EventsList events={fetchedEvents} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/eventsddfsfd");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events!" };
    // throw new Error("Could not fetch events!");
    throw new Response(JSON.stringify({ message: "Could not fetch events!" }), {
      status: 500,
    });
  } else {
    return response;
  }
}
