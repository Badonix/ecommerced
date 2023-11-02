import React from "react";
import "./aboutUs.css";
// import { GoogleMap, LoadScript } from '@react-google-maps/api';

function AboutUs() {
  // const mapStyles = {
  //   height: '400px',
  //   width: '100%'
  // };
  return (
    <div>
      <div className="satus">
        <h1>plywoodhub</h1>
      </div>
      <div className="paragraph">
        <p>
          "plywoodhub" არის კომპანია, რომელიც დაფუძნდა დამუშავებული ხის მასალის
          სიმარტივისა და ბუნებრიობის სიყვარულზე. ჩვენ სპეციალიზირებულნი ვართ
          ექსკლუზიური ავეჯისა და აქსესუარების შექმნაზე, რომელიც დამზადებულია
          მხოლოდ დამუშავებული ხისგან, მასალა, რომელიც, ჩვენი რწმენით,
          განსაკუთრებულ ყურადღებას იმსახურებს. ჩვენ ვამაყობთ ავეჯის წარმოების
          სფეროში დიდი გამოცდილების მქონე ადამიანების გაერთიანებით, ჩვენი გუნდი
          სავსეა სპეციალისტებით, რომლებსაც არ ეშინიათ ახალი და თამამი იდეების
          განხორციელების. ჩვენი ფართო გამოცდილებისა და კრეატიული მიდგომის
          წყალობით, ავეჯის თითოეული ნაწილი, რომელსაც ვქმნით, ასახავს
          განსაკუთრებულ ოსტატობას და სრულყოფილებისკენ სწრაფვას. <br />
          ჩვენი მიზანია ვაჩვენოთ, თუ რამდენად ლამაზი, მოქნილი და საიმედო
          შეიძლება იყოს ფლაივუდის მასალა. რადგან ზუსტად ვიცით, რომ ის
          აკმაყოფილებს თანამედროვე ესთეტიკურ და ეკოლოგიურ მოთხოვნებს და შეუძლია
          გაუძლოს ხანგრძლივ გამოყენებას. ჩვენ პატივს ვცემთ ბუნებას და ვცდილობთ
          გამოვიყენოთ მისი რესურსები გონივრულად და ჩვენს მომხმარებელს ვთავაზობთ
          ხარისხიან, ეკოლოგიურ პროდუქტს ხელმისაწვდომ ფასად
        </p>
      </div>
      <div className="daigi">
        <h1>+995 511 19 99 50</h1>
        <h2>plywoodhub@gmail.com</h2>
      </div>
      {/* <LoadScript googleMapsApiKey="https://www.google.com/maps/place/Skami/@41.7377588,44.747882,17z/data=!4m7!3m6!1s0x404473adbca094b5:0x2ce26af3a511911f!4b1!8m2!3d41.7377548!4d44.7504569!16s%2Fg%2F11rxtdw9ds?entry=ttus">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={10}
            center={{ lat: 41.7377588, lng: 44.747882 }}
          />
        </LoadScript> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.2009282660847!2d44.74788197501818!3d41.73775877419097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473adbca094b5%3A0x2ce26af3a511911f!2sSkami!5e0!3m2!1sen!2sge!4v1698673897831!5m2!1sen!2sge"
        className="mapi"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
export { AboutUs };
