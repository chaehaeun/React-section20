import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage, {
  loader as eventDetailLoader,
} from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import RootLayout from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            element: <EventDetailPage />,
            loader: eventDetailLoader,
          },
          {
            path: "new",
            // 이렇게 쓰면 new를 eventId로 인식해서 EventDetailPage로 가버릴 것이라 생각할 수 있지만
            // 리액트라우터는 똑똑이기 때문에 new 페이지로 갈 것임ㅇㅇ 신경 안 써도 됨
            element: <NewEventPage />,
          },
          {
            path: ":eventId/edit",
            element: <EditEventPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
