import React from 'react';
import { Sizes } from '../../../constants';
import { SpiritPartnerLogoProps } from '../../../types/partnerLogo';
import UNSTABLE_PartnerLogo from '../UNSTABLE_PartnerLogo';

const logo = (
  <svg width="108" height="40" viewBox="0 0 108 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Partner Logo</title>
    <g clipPath="url(#clip0_20364_10)">
      <path
        d="M26.1095 0.567627H7.76627C3.81354 0.567627 0.607956 3.77233 0.607956 7.72399V26.2858C0.607956 30.2374 3.81354 33.4422 7.76627 33.4422H14.2669C14.9581 33.4422 15.9871 33.6211 16.8596 33.8067C17.2935 33.8984 17.6805 33.9901 17.9624 34.0594C18.1033 34.0929 18.2152 34.122 18.2935 34.1421C18.3315 34.1511 18.3628 34.16 18.3829 34.1645C18.3919 34.1667 18.3986 34.169 18.4031 34.169C18.4098 34.169 18.4187 34.1734 18.4299 34.1779C18.4545 34.1869 18.4903 34.2003 18.5373 34.2159C18.6312 34.2495 18.7699 34.3009 18.9467 34.3635C19.3001 34.491 19.8057 34.6744 20.4186 34.898C21.6445 35.3431 23.2976 35.9424 25.0089 36.5619C28.4292 37.8031 32.071 39.127 32.9635 39.4624L33.2655 39.5765V7.72399C33.2655 3.77233 30.0599 0.567627 26.1072 0.567627H26.1095Z"
        fill="#1D1D1D"
      />
      <path
        d="M53.9086 15.8794C54.0428 16.2305 54.1546 16.4497 54.2374 16.6107C54.3202 16.7717 54.4745 16.9506 54.6915 17.1519C54.9085 17.3532 55.2172 17.5634 55.6087 17.7826V17.9212H48.7322V17.7826C49.278 17.5231 49.6606 17.2906 49.8664 17.0893C50.0722 16.888 50.1751 16.6599 50.1751 16.396C50.1751 16.1321 50.061 15.7027 49.8328 15.0721L49.0812 13.0057H44.3075L44.133 13.4776C43.7013 14.712 43.4843 15.5328 43.4843 15.9465C43.4843 16.3602 43.6095 16.6688 43.8556 16.9395C44.1017 17.21 44.5267 17.4918 45.1352 17.7826V17.9212H40.65V17.7826C41.3815 17.2101 41.9184 16.6487 42.2584 16.1075C42.5984 15.5663 42.9787 14.7344 43.4015 13.6117L46.3498 5.63911L45.5982 4.20337C46.9068 3.72255 47.9582 3.21042 48.7635 2.66028L53.8974 15.8481L53.9086 15.8794ZM48.7322 12.0195L46.701 6.45315L44.6811 12.0195H48.7344H48.7322Z"
        fill="#1D1D1D"
      />
      <path
        d="M55.9415 17.7852C56.4761 17.5146 56.8184 17.2552 56.9615 17.0025C57.1047 16.752 57.1785 16.26 57.1785 15.5176V6.24113C57.1785 5.59034 57.1248 5.08716 57.0353 4.74724C56.9436 4.40731 56.8295 4.17473 56.7043 4.05396C56.579 3.9332 56.3218 3.75205 55.9415 3.50158V3.36293C57.5185 3.25111 59.0151 2.99169 60.4266 2.5802V15.5176C60.4266 16.26 60.4982 16.752 60.6436 17.0025C60.789 17.253 61.129 17.5146 61.6525 17.7852V17.9239H55.9303L55.9415 17.7852Z"
        fill="#1D1D1D"
      />
      <path
        d="M79.4276 15.4992C79.4276 16.2416 79.4992 16.7336 79.6446 16.9841C79.79 17.2346 80.13 17.4962 80.6647 17.7668V17.9055H74.9425V17.7668C75.5084 17.4761 75.8597 17.2055 75.9939 16.955C76.1281 16.7046 76.2109 16.2237 76.2399 15.5126C76.2511 14.9602 76.2601 13.5468 76.2601 11.2613C76.2601 10.6306 76.1057 10.1587 75.8082 9.83669C75.5085 9.51465 75.1483 9.35587 74.7255 9.35587C74.0544 9.35587 73.4571 9.77631 72.9315 10.6105V15.5148C72.9315 16.2573 73.003 16.7493 73.1484 16.9998C73.2938 17.2502 73.6339 17.5096 74.1685 17.7825V17.9211H68.4463V17.7825C68.981 17.5119 69.3344 17.2525 69.4865 16.9998C69.6409 16.7493 69.7236 16.2573 69.7326 15.5148C69.7438 15.1324 69.7527 14.1305 69.7527 12.4957C69.7527 11.2523 69.6498 10.4181 69.4418 9.99994C69.236 9.57951 68.8646 9.36929 68.33 9.36929C67.5672 9.36929 66.9297 9.78972 66.4129 10.6418V15.5238C66.4129 16.2662 66.4845 16.7582 66.6299 17.0087C66.7731 17.2592 67.1041 17.5186 67.6209 17.7914V17.9301H61.9211V17.7914C62.4557 17.5208 62.798 17.2614 62.9411 17.0087C63.0843 16.7582 63.1581 16.2662 63.1581 15.5238V11.3418C63.1581 10.4405 63.0865 9.83669 62.9411 9.53478C62.7957 9.23287 62.4557 8.92425 61.9211 8.6134V8.47474C63.3527 8.39423 64.8291 8.13482 66.3346 7.69202V9.92838C67.2607 8.4658 68.4374 7.73227 69.8601 7.73227C70.4887 7.73227 71.0971 7.90223 71.6855 8.2444C72.2738 8.58656 72.6541 9.14565 72.8196 9.91943C73.7569 8.45685 74.9425 7.72333 76.3652 7.72333C76.6851 7.72333 77.0139 7.77253 77.345 7.87316C77.6761 7.9738 78.0049 8.12363 78.3248 8.32491C78.6447 8.52618 78.9131 8.83703 79.1189 9.25747C79.3247 9.67791 79.4276 10.1789 79.4276 10.7514V15.5059H79.4232L79.4276 15.4992Z"
        fill="#1D1D1D"
      />
      <path
        d="M89.9417 18.1828C89.1901 18.1828 88.6621 17.9614 88.3646 17.5208C88.0671 17.0802 87.9329 16.5681 87.962 15.9956H87.9418C87.6331 16.5681 87.1589 17.0668 86.5079 17.5007C85.8592 17.9323 85.1054 18.1425 84.2508 18.1425C83.3963 18.1425 82.7051 17.9211 82.1906 17.4805C81.6739 17.04 81.4166 16.4675 81.4166 15.7742C81.4166 14.7611 81.9826 13.9091 83.1055 13.218C84.2285 12.527 85.857 11.9142 87.9821 11.3842L88.0246 9.76062C88.0358 9.36926 87.9418 9.01815 87.7472 8.71624C87.5504 8.41433 87.2417 8.26449 86.8189 8.26449C86.1903 8.26449 85.6847 8.59548 85.3134 9.25744C84.9421 9.9194 84.6938 10.6999 84.5618 11.6056L84.4589 11.6257L82.2219 10.3108C82.6022 9.61749 83.2129 9.01815 84.0562 8.51497C84.9018 8.01179 85.9532 7.76355 87.2014 7.76355C87.9955 7.76355 88.6666 7.87537 89.2124 8.08559C89.7583 8.2958 90.1609 8.58877 90.4182 8.95777C90.6754 9.329 90.8499 9.70024 90.9461 10.0804C91.0378 10.4628 91.0803 10.8631 91.0714 11.2948L90.9685 16.17C90.9685 16.6218 91.134 16.8432 91.474 16.832C91.8543 16.832 92.1653 16.5614 92.4001 16.0202L92.5746 16.1007C92.3889 16.662 92.0691 17.1451 91.615 17.5365C91.1631 17.9278 90.6553 18.1895 89.9641 18.1895H89.9439V18.185L89.9417 18.1828ZM86.0427 16.4272C86.7138 16.4272 87.3312 16.0873 87.8993 15.4052L87.9821 11.8337C85.848 12.4756 84.7765 13.4886 84.7765 14.8707C84.7765 15.3627 84.8906 15.7429 85.1255 16.0157C85.3649 16.2863 85.6713 16.4183 86.0538 16.4183L86.0427 16.4295V16.4272Z"
        fill="#1D1D1D"
      />
      <path
        d="M48.5528 23.3019C47.5932 23.3019 46.7744 23.8923 46.0228 25.0373C45.2712 26.1801 44.8999 27.8954 44.8999 30.1832C44.8999 32.471 45.2824 34.2646 46.0452 35.4789C46.808 36.6933 47.6737 37.2926 48.6334 37.2926C49.4387 37.2926 50.2843 36.8811 51.1679 36.0492C52.0559 35.2173 52.8791 34.2243 53.642 33.0614H53.7851L53.3623 37.2524C51.7226 37.7041 50.0941 37.9344 48.4745 37.9344C47.4657 37.9344 46.5261 37.7936 45.6515 37.5051C44.7746 37.2143 43.9916 36.7827 43.2915 36.2013C42.5891 35.6198 42.0343 34.8371 41.6316 33.8531C41.229 32.8713 41.0321 31.7487 41.0321 30.4829C41.0321 28.0162 41.7345 26.0996 43.1461 24.7377C44.5576 23.3735 46.3517 22.6914 48.5282 22.6914C49.8682 22.6914 51.4766 22.9218 53.3623 23.3735L53.7851 27.4951H53.642C51.7338 24.6974 50.0561 23.3019 48.6021 23.3019H48.5551H48.5528Z"
        fill="#1D1D1D"
      />
      <path
        d="M63.5474 37.9033C62.7958 37.9033 62.2679 37.6819 61.9704 37.2414C61.6728 36.8008 61.5386 36.2887 61.5677 35.7162H61.5453C61.2366 36.2887 60.7624 36.7874 60.1137 37.2213C59.465 37.6529 58.7111 37.8631 57.8566 37.8631C57.002 37.8631 56.3108 37.6417 55.7963 37.2011C55.2796 36.7606 55.0223 36.1881 55.0223 35.4948C55.0223 34.4817 55.5883 33.6297 56.7135 32.9386C57.8364 32.2476 59.4649 31.6348 61.5901 31.1048L61.6326 29.4812C61.6438 29.0898 61.5498 28.7387 61.3552 28.4368C61.1583 28.1349 60.8496 27.9851 60.4269 27.9851C59.7983 27.9851 59.2927 28.3161 58.9214 28.978C58.55 29.64 58.3017 30.4205 58.1697 31.3262L58.0668 31.3463L55.8299 30.0313C56.2124 29.3381 56.8209 28.7387 57.6664 28.2355C58.512 27.7324 59.5634 27.4841 60.8116 27.4841C61.6057 27.4841 62.2768 27.5959 62.8226 27.8062C63.3685 28.0164 63.7711 28.3093 64.0284 28.6783C64.2856 29.0496 64.4601 29.4208 64.5563 29.801C64.648 30.1834 64.6905 30.5837 64.6793 31.0153L64.5764 35.8906C64.5764 36.3424 64.742 36.5638 65.082 36.5526C65.4623 36.5526 65.7732 36.282 66.0081 35.7408L66.1826 35.8213C65.9969 36.3826 65.677 36.8657 65.2229 37.257C64.7711 37.6484 64.2633 37.9101 63.572 37.9101H63.5519V37.9056L63.5474 37.9033ZM59.6484 36.1478C60.3195 36.1478 60.9369 35.8079 61.5051 35.1258L61.5878 31.5543C59.4538 32.1961 58.3823 33.2092 58.3823 34.5935C58.3823 35.0855 58.4963 35.4657 58.7312 35.7363C58.9706 36.0069 59.2413 36.1478 59.6238 36.1478H59.6506H59.6484Z"
        fill="#1D1D1D"
      />
      <path
        d="M66.3839 37.5211C66.9185 37.2505 67.2608 36.9911 67.4039 36.7384C67.5471 36.4879 67.6209 35.9959 67.6209 35.2535V30.9015C67.6209 30.1098 67.5493 29.5574 67.3927 29.2466C67.2384 28.9357 66.8984 28.6361 66.3727 28.3453V28.2067C67.8379 28.1262 69.3098 27.8667 70.7862 27.424L70.7437 29.4792H70.7862C70.9719 28.967 71.3119 28.5064 71.8063 28.0859C72.3007 27.6655 72.9293 27.4553 73.6809 27.4553C74.0298 27.4553 74.3609 27.5358 74.6719 27.6856L74.2491 30.9842H74.1059C73.2178 29.8616 72.4774 29.3003 71.8667 29.3092C71.4349 29.3092 71.0927 29.5597 70.8578 30.0606V35.2356C70.8578 35.978 70.9495 36.47 71.1352 36.7205C71.3209 36.971 71.7638 37.2326 72.464 37.5032V37.6419H66.3615L66.3816 37.5211H66.3839Z"
        fill="#1D1D1D"
      />
      <path
        d="M84.8281 34.0815C84.7453 34.4728 84.6223 34.8552 84.4568 35.2153C84.2912 35.5754 84.0541 35.9779 83.7365 36.4095C83.4188 36.8389 82.9625 37.1811 82.3764 37.4427C81.788 37.7044 81.108 37.8341 80.334 37.8341C78.8285 37.8341 77.5825 37.3622 76.5804 36.4296C75.5804 35.4971 75.0861 34.2425 75.0861 32.6703C75.0861 31.0982 75.5715 29.8726 76.5401 28.9088C77.5087 27.9449 78.7681 27.4663 80.3116 27.4663C81.117 27.4663 81.8261 27.605 82.4457 27.8867C83.0631 28.1685 83.5284 28.5174 83.8461 28.9401C84.1637 29.3627 84.4031 29.772 84.5485 30.1745C84.6916 30.5771 84.7655 30.9573 84.7655 31.3084V31.5589H78.0143V31.8406C78.0143 33.1444 78.3856 34.115 79.1171 34.7501C79.8486 35.3808 80.7255 35.7028 81.7366 35.7028C83.1079 35.714 84.0854 35.1504 84.6737 34.0189L84.8281 34.0882V34.0815ZM79.9604 27.9919C79.4146 27.9919 78.9829 28.2513 78.6541 28.7925C78.3252 29.3337 78.1261 30.0851 78.0545 31.049L81.8261 31.0087C81.8149 30.7068 81.7836 30.4071 81.7344 30.1075C81.6829 29.8055 81.5912 29.4857 81.457 29.1436C81.3228 28.8037 81.1259 28.5219 80.8687 28.3117C80.6114 28.1014 80.3116 27.9896 79.9716 27.9896H79.9582L79.9604 27.9919Z"
        fill="#1D1D1D"
      />
      <path
        d="M95.509 34.0815C95.4262 34.4728 95.3032 34.8552 95.1376 35.2153C94.9743 35.5754 94.735 35.9779 94.4173 36.4095C94.0997 36.8389 93.6433 37.1811 93.0573 37.4427C92.4689 37.7044 91.7889 37.8341 91.0149 37.8341C89.5094 37.8341 88.2634 37.3622 87.2613 36.4296C86.2591 35.4971 85.767 34.2425 85.767 32.6703C85.767 31.0982 86.2524 29.8726 87.221 28.9088C88.1896 27.9449 89.449 27.4663 90.9925 27.4663C91.7978 27.4663 92.507 27.605 93.1266 27.8867C93.744 28.1685 94.2093 28.5174 94.5292 28.9401C94.8468 29.3627 95.0862 29.772 95.2316 30.1745C95.3748 30.5771 95.4486 30.9573 95.4486 31.3084V31.5589H88.6974V31.8406C88.6974 33.1444 89.0687 34.115 89.8002 34.7501C90.5317 35.3808 91.4086 35.7028 92.4197 35.7028C93.791 35.714 94.7685 35.1504 95.3569 34.0189L95.5112 34.0882L95.509 34.0815ZM90.6413 27.9919C90.0955 27.9919 89.6638 28.2513 89.3349 28.7925C89.0061 29.3337 88.8093 30.0851 88.7377 31.049L92.5092 31.0087C92.498 30.7068 92.4667 30.4049 92.4175 30.1075C92.366 29.8055 92.2743 29.4857 92.1401 29.1436C92.0059 28.8037 91.809 28.5219 91.5518 28.3117C91.2945 28.1014 90.9948 27.9896 90.6548 27.9896H90.6413V27.9919Z"
        fill="#1D1D1D"
      />
      <path
        d="M96.0666 37.5211C96.6013 37.2505 96.9435 36.9911 97.0867 36.7384C97.2299 36.4879 97.3037 35.9959 97.3037 35.2535V30.9015C97.3037 30.1098 97.2321 29.5574 97.0755 29.2466C96.9212 28.9357 96.5811 28.6361 96.0555 28.3453V28.2067C97.5207 28.1262 98.9926 27.8667 100.469 27.424L100.426 29.4792H100.469C100.655 28.967 100.995 28.5064 101.489 28.0859C101.981 27.6655 102.612 27.4553 103.364 27.4553C103.713 27.4553 104.044 27.5358 104.355 27.6856L103.932 30.9842H103.789C102.901 29.8616 102.16 29.3003 101.552 29.3092C101.12 29.3092 100.778 29.5597 100.543 30.0606V35.2356C100.543 35.978 100.635 36.47 100.82 36.7205C101.006 36.971 101.449 37.2326 102.149 37.5032V37.6419H96.0465L96.0666 37.5211Z"
        fill="#1D1D1D"
      />
      <path
        d="M105.61 37.8116C105.146 37.8116 104.744 37.6528 104.404 37.3196C104.064 36.9864 103.898 36.6084 103.898 36.1746C103.898 35.7407 104.073 35.3315 104.415 35.0027C104.757 34.674 105.158 34.5107 105.621 34.5107C106.084 34.5107 106.466 34.6695 106.806 35.0027C107.146 35.336 107.312 35.7251 107.312 36.1746C107.312 36.6241 107.149 36.9976 106.806 37.3196C106.464 37.6416 106.077 37.8116 105.623 37.8116H105.607H105.61Z"
        fill="#1D1D1D"
      />
      <path
        d="M10.7862 5.71045C13.5668 5.71045 15.8194 7.96247 15.8194 10.7423C15.8194 13.5221 13.5668 15.7741 10.7862 15.7741C8.00567 15.7741 5.75304 13.5221 5.75304 10.7423C5.75304 7.96247 8.00567 5.71045 10.7862 5.71045Z"
        fill="#FFCB3B"
      />
      <path
        d="M25.2146 17.3395C21.2887 17.3395 18.0787 20.4055 17.8483 24.2722L17.8326 24.7195V28.074L28.1227 31.8758V17.3395H25.2146Z"
        fill="#4DD7BE"
      />
      <path
        d="M17.8326 5.71045H23.6487C26.1206 5.71045 28.1227 7.71199 28.1227 10.1832V15.7741H17.8326V5.71045Z"
        fill="#8F66FF"
      />
      <path
        d="M10.227 28.074H15.8127C15.8127 28.0002 15.8194 27.9264 15.8194 27.8504V24.7195C15.8194 20.6426 12.5154 17.3395 8.4374 17.3395H5.75304V23.6013C5.75304 26.0725 7.75513 28.074 10.227 28.074Z"
        fill="#FD7E40"
      />
    </g>
    <defs>
      <clipPath id="clip0_20364_10">
        <rect width="108" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const PartnerLogoDemoFactory = ({ ...props }: SpiritPartnerLogoProps) => {
  const sizes = Object.values(Sizes);

  return (
    <>
      {sizes.map((size) => (
        <div key={size}>
          <h3>{`Size ${size}`}</h3>
          <div
            style={{
              backgroundColor: '#F2F3F5',
              padding: '48px',
            }}
          >
            <UNSTABLE_PartnerLogo size={size} {...props}>
              {logo}
            </UNSTABLE_PartnerLogo>
          </div>
        </div>
      ))}
    </>
  );
};

export default PartnerLogoDemoFactory;