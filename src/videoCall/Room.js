import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

function Room() {
    const {roomID}=useParams();

    let mymetting=async(element)=>{
        const appID = 534935685;
        const serverSecret = "c14c7ff8fbc2c0a77c8a5f62fc460b29";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(),"Ripukesh");
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            sharedLinks: [
              {
                name: 'Copy link',
                url:`http://localhost3000/room/${roomID}`
                 
              },
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
            showRoomTimer:true
          });




}
  return (
    <div style={{fontSize:"5%"}} ref={mymetting}>
       
    </div>
  )
}

export default Room
