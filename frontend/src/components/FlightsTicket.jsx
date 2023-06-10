import React from "react";

const FlightsTicket = ({ data, from, to }) => {
  return (
    <div className="tickets-section mb-3">
      <div role="button" className="ticket-container">
        <div className="ticket-left">
          <div className="ticket-left-body">
            <div className="upper-content">
              <div className="upper-details-content">
                <div className="leg-details-container">
                  <div className="airline-logo">
                    <div className="airline-max">
                      <div
                        className="airline-img-container"
                        style={{
                          height: "0px",
                          paddingBottom: "50%",
                        }}
                      >
                        <p>{data[1].Name}</p>
                      </div>
                    </div>
                  </div>
                  <div className="leg-info">
                    <div className="leg-route-info">
                      <span className="leg-hour-info">00:00</span>
                      <span className="leg-place-info">{from}</span>
                    </div>
                    <div className="leg-arrow">
                      <span className="duration">0h 00</span>
                      <div className="stop-line">
                        <svg
                          xmlns="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 12 12"
                          enableBackground="new 0 0 12 12"
                          className="arrow-end"
                        >
                          <path
                            fill="#898294"
                            d="M3.922,12h0.499c0.181,0,0.349-0.093,0.444-0.247L7.949,6.8l3.233-0.019C11.625,6.791,11.989,6.44,12,6 c-0.012-0.44-0.375-0.792-0.818-0.781L7.949,5.2L4.866,0.246C4.77,0.093,4.602,0,4.421,0L3.922,0c-0.367,0-0.62,0.367-0.489,0.71 L5.149,5.2l-2.853,0L1.632,3.87c-0.084-0.167-0.25-0.277-0.436-0.288L0,3.509L1.097,6L0,8.491l1.196-0.073 C1.382,8.407,1.548,8.297,1.632,8.13L2.296,6.8h2.853l-1.716,4.49C3.302,11.633,3.555,12,3.922,12"
                          ></path>
                        </svg>
                      </div>
                      <div className="leg-direct">
                        {data[0].Direct ? (
                          <span className="direct">Direct</span>
                        ) : (
                          <span className="no direct">+1 stops</span>
                        )}
                      </div>
                    </div>
                    <div className="leg-route-info test01">
                      <span className="leg-hour-info">00:00</span>
                      <span className="leg-place-info">{to}</span>
                    </div>
                  </div>
                </div>
                <div className="leg-details-container">
                  <div className="airline-logo">
                    <div className="airline-max">
                      <div
                        className="airline-img-container"
                        style={{
                          height: "0px",
                          paddingBottom: "50%",
                        }}
                      >
                        <p>{data[1].Name}</p>
                      </div>
                    </div>
                  </div>
                  <div className="leg-info">
                    <div className="leg-route-info">
                      <span className="leg-hour-info">00:00</span>
                      <span className="leg-place-info">{to}</span>
                    </div>
                    <div className="leg-arrow">
                      <span className="duration">0h 00</span>
                      <div className="stop-line">
                        <svg
                          xmlns="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 12 12"
                          enableBackground="new 0 0 12 12"
                          className="arrow-end"
                        >
                          <path
                            fill="#898294"
                            d="M3.922,12h0.499c0.181,0,0.349-0.093,0.444-0.247L7.949,6.8l3.233-0.019C11.625,6.791,11.989,6.44,12,6 c-0.012-0.44-0.375-0.792-0.818-0.781L7.949,5.2L4.866,0.246C4.77,0.093,4.602,0,4.421,0L3.922,0c-0.367,0-0.62,0.367-0.489,0.71 L5.149,5.2l-2.853,0L1.632,3.87c-0.084-0.167-0.25-0.277-0.436-0.288L0,3.509L1.097,6L0,8.491l1.196-0.073 C1.382,8.407,1.548,8.297,1.632,8.13L2.296,6.8h2.853l-1.716,4.49C3.302,11.633,3.555,12,3.922,12"
                          ></path>
                        </svg>
                      </div>
                      <div className="leg-direct">
                        {data[0].Direct ? (
                          <span className="direct">Direct</span>
                        ) : (
                          <span className="no direct">+1 stops</span>
                        )}
                      </div>
                    </div>
                    <div className="leg-route-info test01">
                      <span className="leg-hour-info">00:00</span>
                      <span className="leg-place-info">{from}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="lower-content">
              <div className="left-placeholder"></div>
              <div className="right-safety">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  className="safety-icon"
                  style={{
                    width: "1.125rem",
                    height: "1.125rem",
                  }}
                >
                  <path d="M22.192 2.943a2.562 2.562 0 0 0-1.442-1.454 26.458 26.458 0 0 0-17.5 0 2.562 2.562 0 0 0-1.442 1.454A3.867 3.867 0 0 0 1.5 4.416v6.542a12.483 12.483 0 0 0 3.45 8.137 24.682 24.682 0 0 0 5.184 4.363 3.481 3.481 0 0 0 3.732 0 24.709 24.709 0 0 0 5.185-4.363 12.48 12.48 0 0 0 3.45-8.137V4.416a3.87 3.87 0 0 0-.309-1.473zM11.706 9.135a2.39 2.39 0 0 0-1.07 1.07l-.567 1.133a1.195 1.195 0 0 1-2.138 0l-.567-1.133a2.4 2.4 0 0 0-1.069-1.07l-1.134-.567a1.196 1.196 0 0 1 0-2.138l1.133-.567a2.391 2.391 0 0 0 1.07-1.07L7.93 3.66h.001a1.196 1.196 0 0 1 2.138 0l.567 1.133a2.391 2.391 0 0 0 1.07 1.07l1.133.567a1.196 1.196 0 0 1 0 2.138zm6.21 4.72a.797.797 0 0 1-.357.357l-.755.378a1.594 1.594 0 0 0-.713.713l-.378.755a.797.797 0 0 1-1.426 0l-.378-.755a1.594 1.594 0 0 0-.713-.713l-.755-.378a.797.797 0 0 1 0-1.426l.755-.378a1.587 1.587 0 0 0 .713-.713h.001l.377-.755a.797.797 0 0 1 1.426 0l.378.755a1.587 1.587 0 0 0 .713.713l.755.378a.797.797 0 0 1 .357 1.069z"></path>
                </svg>
                &nbsp;
                <span className="safety-text">
                  5/5 rating for COVID-19 safety measures
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="punch-line">
          <div className="notch notch-top"></div>
          <div className="notch notch-bottom"></div>
        </div>
        <div className="ticket-right">
          <div className="ticket-right-body">
            <span className="deals">1 deal</span>
            <div className="min-price">
              <span className="min-price-text">${data[0].MinPrice}</span>
            </div>
            <span></span>
            <button type="button" className="test-btn">
              Select &nbsp;
              <span
                style={{
                  lineHeight: "1.125rem",
                  display: "inline-block",
                  marginTop: "0.1rem",
                  marginLeft: "-3.8px",
                  verticalAlign: "top",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                  }}
                  fill="rgb(255, 255, 255)"
                >
                  <path d="M14.4 19.5l5.7-5.3c.4-.4.7-.9.8-1.5.1-.3.1-.5.1-.7s0-.4-.1-.6c-.1-.6-.4-1.1-.8-1.5l-5.7-5.3c-.8-.8-2.1-.7-2.8.1-.8.8-.7 2.1.1 2.8l2.7 2.5H5c-1.1 0-2 .9-2 2s.9 2 2 2h9.4l-2.7 2.5c-.5.4-.7 1-.7 1.5s.2 1 .5 1.4c.8.8 2.1.8 2.9.1z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightsTicket;
