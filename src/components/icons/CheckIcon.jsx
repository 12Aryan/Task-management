
const CheckIcon = ({ checked }) => {
  const fillColor = checked ? `#3AAF3C` : `#cfeacf`;
  return (
    <svg
      version="1.1"
      fillColor
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      height="22.8"
      width="22.8"
      viewBox="0 0 122.88 122.88"
      style={{ enableBackground: "new 0 0 22.88 22.88" }}
      xml:space="preserve"
    >
      <g>
        <path
          style={{ fillRule: "evenodd", clipRule: "evenodd", fill: fillColor }}
          d="M61.44,0c33.93,0,61.44,27.51,61.44,61.44c0,33.93-27.51,61.44-61.44,61.44C27.51,122.88,0,95.37,0,61.44 C0,27.51,27.51,0,61.44,0L61.44,0L61.44,0z M39.48,56.79c4.6,2.65,7.59,4.85,11.16,8.78c9.24-14.88,19.28-23.12,32.32-34.83 l1.28-0.49h14.28C79.38,51.51,64.53,69.04,51.24,94.68c-6.92-14.79-13.09-25-26.88-34.47L39.48,56.79L39.48,56.79z"
        />
      </g>
    </svg>
  );
};

export default CheckIcon;
