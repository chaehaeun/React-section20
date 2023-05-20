import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
// useLoaderData : 가장 가까운 라우트의 loader 데이터를 가져오는 훅

function EventsPage() {
  const fetchedEvents = useLoaderData();

  return (
    <>
      <EventsList events={fetchedEvents} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
