// import "./styles.css";
import { init } from "emailjs-com";
init("user_RkH8D5nQ5kIfybtnIL8wD");
import { ScheduleMeeting } from "react-schedule-meeting";
import { useState, useEffect } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import { Input, Segment, Button } from "semantic-ui-react";
import ConfirmSuccess from "./modal";
import InformLogged from "./modal1";

const availableTimeslots = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14
].map((id) => {
  return {
    id,
    startTime: new Date(
      new Date(new Date().setDate(new Date().getDate() + id)).setHours(
        9,
        0,
        0,
        0
      )
    ),
    endTime: new Date(
      new Date(new Date().setDate(new Date().getDate() + id)).setHours(
        17,
        0,
        0,
        0
      )
    )
  };
});



const apiUrl = "./../../../api/reservation";

const submit_data = async (startDate: Date) => {
    try {
      const date = startDate.toISOString();
  
      const response = await axios.post(apiUrl, {
        date: date,
      });
  
      if (response.status >= 200 && response.status < 300) {
        console.log("API Response:", response.data);
        // Handle the API response here if needed
      } else {
        console.error("API Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error sending data to the API:", error);
    }
  };
  

export default function App(props: any) {

  const [start_date, set_start_date] = useState(new Date());
  const [info_selected_active, set_info_selected_active] = useState(props);

  useEffect(() => {
    submit_data(start_date);
    set_info_selected_active(false);
  }, []);

  return (
    <div className="App">
      <Segment inverted>
        <div className="inline">
        
          <ConfirmSuccess
            submit_data={() => {
              submit_data(start_date);
            }}
          />

          <InformLogged
            info_selected_active={info_selected_active}
            set_info_selected_active={set_info_selected_active}
          />
        </div>
      </Segment>{" "}
      <ScheduleMeeting
        borderRadius={10}
        primaryColor="#3f5b85"
        eventDurationInMinutes={30}
        availableTimeslots={availableTimeslots}
        onStartTimeSelect={(e) => {
          set_start_date(e.startTime);
          set_info_selected_active(true);
        }}
      />
    </div>
  );
}
