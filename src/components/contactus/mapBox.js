import React from "react";

export default function MapBox() {
  return (
    <div className="col-lg-6 col-md-6">
      <div className="MapDiv">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="100%"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>

            {/* <!-- <br> --> */}
            <style>.mapouter</style>
            <style>.gmap_canvas</style>
          </div>
        </div>
      </div>
    </div>
  );
}
