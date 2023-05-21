import EventsList from "../components/EventsList";
import { json, useLoaderData } from "react-router-dom";
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
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events!" };
    // throw new Error("Could not fetch events!");
    // throw new Response(JSON.stringify({ message: "Could not fetch events!" }), {
    //   status: 500,
    // });
    return json({ message: "Could not fetch events!" }, { status: 500 });
    // 번거롭게 Response 객체를 만들지 않고 json()을 쓰면
    // json 형태로 바로 리턴해줌
    // json()은 json 형식의 데이터가 포함된 Response 객체를 생성하는 react router dom 함수
  } else {
    return response;
  }
}
