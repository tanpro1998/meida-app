import "./Share.css";

import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'

function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder="What's in your mind Tan?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon" />
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon" />
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon" />
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                    <span className="shareOptionText">Photo or Video</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
