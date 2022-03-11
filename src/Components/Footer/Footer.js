import React from "react";
import {FaGlobe} from "react-icons/fa"
import "./Footer.css"

function Footer(){
    return (
        <div className="footer">
            <p>Questions? Call 000-800-040-1843</p>
            <div className="linkRows">
                <div className="row1">
                     <p>FAQ</p>
                     <p>Investor Relations</p>
                     <p>Privacy</p>
                     <p>Speed Test</p>
                </div>
                <div className="row2">
                    <p>Help Centre</p>
                    <p>Jobs</p>
                    <p>Cookie Preferences</p>
                    <p>Legal Notices</p>
                </div>
                <div className="row3">
                    <p>Account</p>
                    <p>Ways to Watch</p>
                    <p>Corporate Information</p>
                    <p>Only on Netflix</p>
                </div>
                <div className="row4">
                    <p>Media Centre</p>
                    <p>Terms of Use</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <div className="lang">
            <span><FaGlobe className="globe"/></span>
                <select name="" id="" className="language">
                    <option value="">English</option>
                    <option value="">Hindi</option>
                </select>
            </div>
            <p>Netflix India</p>
        </div>
    )
}
export default Footer