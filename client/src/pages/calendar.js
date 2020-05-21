import React from "react";

function Calendar() {
  return (
    <div>
      <div className="split left">
        <div className="centered">
          <img src="images/Peggy_NewLeaf_Official.png" alt="animalcrossing" className="center"/>
          <h2>Peggy</h2>
          <p>HAPPY BIRTHDAY!</p>
          <br/>
          <br/>
          <br/>
          <img src="images/Renée_NH.png" alt="animalcrossing" className="center"/>
          <h2>Renee</h2>
          <p>Upcoming Birthday!</p>
          <br/>
          <br/>
          <br/>
          <img src="" alt="images/Portia_NewLeaf_Official.png" className="center"/>
          <h2>Portia</h2>
          <p>It will be a while.</p>
        </div>
      </div>


    <div className="splitr right">
        <div className="centered1">
            <a href="/#/editVillager" className="button">Link Button</a>
            <br/>
            <br/>
            <h1>Calendar</h1>

                <div className="month"/>
                    <ul>
                        <li className="prev">&#10094;</li>
                        <li className="next">&#10095;</li>
                        <li>
                            May<br/>
                            <span id="month">2020</span>
                        </li>
                    </ul>
                </div>

                <ul className="weekdays">
                    <li>Mo</li>
                    <li>Tu</li>
                    <li>We</li>
                    <li>Th</li>
                    <li>Fr</li>
                    <li>Sa</li>
                    <li>Su</li>
                </ul>

                <ul className="days">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                    <li>15</li>
                    <li>16</li>
                    <li>17</li>
                    <li>18</li>
                    <li>19</li>
                    <li>20</li>
                    <li>21</li>
                    <li>22</li>
                    <li><span className="active">23</span></li>
                    <li>24</li>
                    <li>25</li>
                    <li>26</li>
                    <li>27</li>
                    <li>28</li>
                    <li>29</li>
                    <li>30</li>
                    <li>31</li>
                </ul>
        </div>
    </div>
  );
}

export default Calendar;