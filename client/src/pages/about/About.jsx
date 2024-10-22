import "./about.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://media.istockphoto.com/id/1915382108/photo/smiling-friendly-confident-millennial-caucasian-lady-manager-teacher-in-formal-wear-with.jpg?s=612x612&w=0&k=20&c=TkrRP273eXURjstyDZHFH4lkrE6OFmVJ9ZCrgLoPfIw="
          alt="About Me"
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse. Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <i className="sidebarIcon fab fa-facebook-square"></i>
  </a>
  <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <i className="sidebarIcon fab fa-instagram-square"></i>
  </a>
  <a href="https://www.pinterest.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <i className="sidebarIcon fab fa-pinterest-square"></i>
  </a>
  <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <i className="sidebarIcon fab fa-twitter-square"></i>
  </a>
        </div>
      </div>
    </div>
  );
}
