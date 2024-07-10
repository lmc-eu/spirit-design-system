# UNSTABLE Footer

> ⚠️ This component is UNSTABLE. It may significantly change at any point in the future.
> Please use it with caution.

The Footer is a highly variable and customizable component. It comes in several
design variants and provides a handful of building blocks you can use to achieve
your specific design goals.

## Composition

This is how all supported building blocks of the Footer build up the complete
composition:

```html
<footer class="UNSTABLE_Footer">
  <!-- Footer columns – links relatable to the web hierarchy, etc. -->
  <!-- Footer content – links to social sites, product logo, etc. -->
  <!-- Footer copyright – links to the GDPR, cookies, etc. -->
</footer>
```

👉 Please, keep in mind that:

- to achieve the desired design, you can use the provided building blocks in any order you need,
- in case you need dividers between section, use the `UNSTABLE_Divider` component,
- to achieve the offset between columns and the rest of the Footer, please use spacing utility classes like `mb-*` or `pt-*`,
- the `Footer Content` is currently under development, so it's not part of this component yet.

## Basic Usage

The basic usage of this component could be:

```html
<footer class="UNSTABLE_Footer">
  <div class="Container">
    <div class="Grid Grid--cols-2 Grid--tablet--cols-4 mb-700 mb-tablet-400">
      <nav aria-labelledby="footer-part-one" class="mb-600 mb-tablet-800">
        <h3 class="typography-body-large-text-bold mb-600" id="footer-part-one">Section headline</h3>
        <ul class="Stack Stack--hasSpacing" style="--stack-spacing: var(--spirit-space-500)">
          <li>
            <a href="www.example.com">Link</a>
          </li>

          <li>
            <a href="www.example.com">Link</a>
          </li>

          <li>
            <a href="www.example.com">Link</a>
          </li>
        </ul>
      </nav>

      <nav aria-labelledby="footer-part-two" class="mb-600 mb-tablet-800">
        <h3 class="typography-body-large-text-bold mb-600" id="footer-part-two">Section headline</h3>

        <ul class="Stack Stack--hasSpacing" style="--stack-spacing: var(--spirit-space-500)">
          <li>
            <a href="www.example.com">Link</a>
          </li>

          <li>
            <a href="www.example.com">Link</a>
          </li>

          <li>
            <a href="www.example.com">Link</a>
          </li>

          <li>
            <a href="www.example.com">Link</a>
          </li>
        </ul>
      </nav>

      <nav aria-labelledby="footer-part-three" class="mb-600 mb-tablet-800">
        <h3 class="typography-body-large-text-bold mb-600" id="footer-part-three">Section headline</h3>

        <ul class="Stack Stack--hasSpacing" style="--stack-spacing: var(--spirit-space-500)">
          <li>
            <a href="www.example.com">Link</a>
          </li>

          <li>
            <a href="www.example.com">Link</a>
          </li>

          <li>
            <a href="www.example.com">Link</a>
          </li>

          <li>
            <a href="www.example.com">Link</a>
          </li>

          <li>
            <a href="www.example.com">Link</a>
          </li>

          <li>
            <a href="www.example.com">Link</a>
          </li>
        </ul>
      </nav>

      <nav aria-labelledby="footer-part-four" class="mb-600 mb-tablet-800">
        <h3 class="typography-body-large-text-bold mb-600" id="footer-part-four">Section headline</h3>

        <ul class="Stack Stack--hasSpacing" style="--stack-spacing: var(--spirit-space-500)">
          <li>
            <a href="www.example.com">Link</a>
          </li>

          <li>
            <a href="www.example.com">Link</a>
          </li>

          <li>
            <a href="www.example.com">Link</a>
          </li>
        </ul>
      </nav>
    </div>

    <hr class="UNSTABLE_Divider mb-700 mb-tablet-400" />

    <div class="UNSTABLE_FooterContent py-900">
      <div class="UNSTABLE_FooterContent__slot UNSTABLE_FooterContent__slot--left">
        <div aria-label="Logo of the JobBoard" class="UNSTABLE_ProductLogo">
          <svg width="178" height="44" viewBox="0 0 178 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_19404_2964)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 22C15.9836 22 24 13.9836 24 0C24 13.9836 32.0164 22 46 22C32.0164 22 24 30.0164 24 44C24 30.0164 15.9836 22 2 22Z"
                fill="url(#paint0_linear_19404_2964)"
              ></path>
            </g>
            <path
              d="M52 25.9625V24.6625H55.9V25.9625C55.9 26.9375 56.45 27.8375 58 27.8375C59.5 27.8375 60.075 27.0625 60.075 25.8125V12.7625H64.125V26.0625C64.125 29.2375 61.775 31.5875 58.05 31.5875C53.975 31.5875 52 29.1625 52 25.9625Z"
              fill="#1D1D1D"
            ></path>
            <path
              d="M66.7037 24.9875C66.7037 21.0375 69.6037 18.3875 73.6037 18.3875C77.5787 18.3875 80.4787 21.0375 80.4787 24.9875C80.4787 28.9375 77.5787 31.5625 73.6037 31.5625C69.6037 31.5625 66.7037 28.9375 66.7037 24.9875ZM70.5787 24.9625C70.5787 26.8625 71.8037 28.1125 73.6037 28.1125C75.3787 28.1125 76.6037 26.8625 76.6037 24.9625C76.6037 23.0875 75.3787 21.8375 73.6037 21.8375C71.8037 21.8375 70.5787 23.0875 70.5787 24.9625Z"
              fill="#1D1D1D"
            ></path>
            <path
              d="M86.3357 31.2625H82.7107V12.4125H86.5607V20.2125C87.3107 19.0875 88.9607 18.3375 90.7607 18.3375C94.2607 18.3375 96.4857 21.0625 96.4857 25.1375C96.4857 29.0125 94.0107 31.5875 90.4607 31.5875C88.7107 31.5875 87.2107 30.8125 86.5357 29.6625L86.3357 31.2625ZM86.5857 24.9375C86.5857 26.8125 87.8357 28.0625 89.6357 28.0625C91.4607 28.0625 92.6107 26.7875 92.6107 24.9375C92.6107 23.0875 91.4607 21.8125 89.6357 21.8125C87.8357 21.8125 86.5857 23.0625 86.5857 24.9375Z"
              fill="#1D1D1D"
            ></path>
            <path
              d="M99.177 31.2625V12.7625H106.877C110.602 12.7625 112.852 14.7125 112.852 17.8875C112.852 19.8625 111.952 21.3125 110.277 22.0375C112.102 22.6375 113.077 24.0625 113.077 26.1625C113.077 29.4375 110.877 31.2625 106.877 31.2625H99.177ZM106.452 16.3125H103.227V20.3375H106.452C107.902 20.3375 108.702 19.6125 108.702 18.2875C108.702 16.9875 107.927 16.3125 106.452 16.3125ZM106.652 23.7375H103.227V27.7125H106.652C108.152 27.7125 108.927 27.0375 108.927 25.6625C108.927 24.4125 108.127 23.7375 106.652 23.7375Z"
              fill="#1D1D1D"
            ></path>
            <path
              d="M114.653 24.9875C114.653 21.0375 117.553 18.3875 121.553 18.3875C125.528 18.3875 128.428 21.0375 128.428 24.9875C128.428 28.9375 125.528 31.5625 121.553 31.5625C117.553 31.5625 114.653 28.9375 114.653 24.9875ZM118.528 24.9625C118.528 26.8625 119.753 28.1125 121.553 28.1125C123.328 28.1125 124.553 26.8625 124.553 24.9625C124.553 23.0875 123.328 21.8375 121.553 21.8375C119.753 21.8375 118.528 23.0875 118.528 24.9625Z"
              fill="#1D1D1D"
            ></path>
            <path
              d="M134.435 31.5875C131.785 31.5875 130.135 30.0375 130.135 27.5875C130.135 25.2875 131.76 23.8625 134.76 23.6375L138.26 23.3625V23.1625C138.26 21.9375 137.51 21.2875 136.135 21.2875C134.51 21.2875 133.635 21.9125 133.635 23.0375H130.435C130.435 20.2125 132.76 18.3625 136.335 18.3625C139.96 18.3625 142.01 20.3875 142.01 23.9625V31.2625H138.61L138.36 29.6125C137.96 30.7625 136.31 31.5875 134.435 31.5875ZM135.785 28.7375C137.26 28.7375 138.285 28.0125 138.285 26.5875V25.9125L136.335 26.0875C134.66 26.2375 134.06 26.6125 134.06 27.4125C134.06 28.3125 134.61 28.7375 135.785 28.7375Z"
              fill="#1D1D1D"
            ></path>
            <path
              d="M153.371 18.7625V22.3875H152.146C149.946 22.3875 148.621 23.3625 148.621 25.8375V31.2625H144.771V18.7875H148.396L148.596 20.6375C149.121 19.4125 150.221 18.5875 151.896 18.5875C152.346 18.5875 152.846 18.6375 153.371 18.7625Z"
              fill="#1D1D1D"
            ></path>
            <path
              d="M160.202 31.5875C156.602 31.5875 154.277 29.0375 154.277 25.0875C154.277 21.1125 156.652 18.3625 160.452 18.3625C162.002 18.3625 163.477 18.9875 164.202 19.9125V12.4125H168.052V31.2625H164.427L164.227 29.6625C163.552 30.8125 162.002 31.5875 160.202 31.5875ZM161.127 28.0625C162.927 28.0625 164.177 26.8125 164.177 24.9375C164.177 23.0625 162.927 21.8125 161.127 21.8125C159.302 21.8125 158.152 23.0875 158.152 24.9375C158.152 26.7875 159.302 28.0625 161.127 28.0625Z"
              fill="#1D1D1D"
            ></path>
            <path
              d="M173.343 31.5875C172.068 31.5875 171.043 30.5625 171.043 29.3375C171.043 28.0875 172.068 27.0625 173.343 27.0625C174.568 27.0625 175.643 28.0875 175.643 29.3375C175.643 30.5625 174.568 31.5875 173.343 31.5875Z"
              fill="#1D1D1D"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_19404_2964"
                x1="5.14205"
                y1="7.05282"
                x2="45.2356"
                y2="31.3983"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFCB3B"></stop>
                <stop offset="0.28" stop-color="#FD7E40"></stop>
                <stop offset="0.67" stop-color="#8F66FF"></stop>
                <stop offset="0.89" stop-color="#4DD7BE"></stop>
              </linearGradient>
              <clipPath id="clip0_19404_2964">
                <rect width="44" height="44" fill="white" transform="translate(2)"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>

    <hr class="UNSTABLE_Divider mb-700 mb-tablet-400" />

    <ul class="UNSTABLE_Footer__copyright">
      <li>
        <a href="www.example.com" class="link-secondary">Legal notice</a>
      </li>

      <li>
        <a href="www.example.com" class="link-secondary">Terms of service</a>
      </li>

      <li>
        <a href="www.example.com" class="link-secondary">Privacy policy</a>
      </li>

      <li>
        <a href="www.example.com" class="link-secondary">Manage cookies</a>
      </li>
    </ul>
  </div>
</footer>
```

### Footer Content

The `FooterContent` is container with three slots for content. The content can be placed in the left, center, or right slot.
The content in the center slot is aligned to the center of the footer.

Below is example with content in all three slots: product logo, list of social sites and language selector.

```html
<footer class="UNSTABLE_Footer">
  …
  <div class="UNSTABLE_FooterContent py-900">
    <div class="UNSTABLE_FooterContent__slot UNSTABLE_FooterContent__slot--left">
      <div aria-label="Logo of the JobBoard" class="UNSTABLE_ProductLogo">
        <svg width="178" height="44" viewBox="0 0 178 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_19404_2964)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 22C15.9836 22 24 13.9836 24 0C24 13.9836 32.0164 22 46 22C32.0164 22 24 30.0164 24 44C24 30.0164 15.9836 22 2 22Z"
              fill="url(#paint0_linear_19404_2964)"
            ></path>
          </g>
          <path
            d="M52 25.9625V24.6625H55.9V25.9625C55.9 26.9375 56.45 27.8375 58 27.8375C59.5 27.8375 60.075 27.0625 60.075 25.8125V12.7625H64.125V26.0625C64.125 29.2375 61.775 31.5875 58.05 31.5875C53.975 31.5875 52 29.1625 52 25.9625Z"
            fill="#1D1D1D"
          ></path>
          <path
            d="M66.7037 24.9875C66.7037 21.0375 69.6037 18.3875 73.6037 18.3875C77.5787 18.3875 80.4787 21.0375 80.4787 24.9875C80.4787 28.9375 77.5787 31.5625 73.6037 31.5625C69.6037 31.5625 66.7037 28.9375 66.7037 24.9875ZM70.5787 24.9625C70.5787 26.8625 71.8037 28.1125 73.6037 28.1125C75.3787 28.1125 76.6037 26.8625 76.6037 24.9625C76.6037 23.0875 75.3787 21.8375 73.6037 21.8375C71.8037 21.8375 70.5787 23.0875 70.5787 24.9625Z"
            fill="#1D1D1D"
          ></path>
          <path
            d="M86.3357 31.2625H82.7107V12.4125H86.5607V20.2125C87.3107 19.0875 88.9607 18.3375 90.7607 18.3375C94.2607 18.3375 96.4857 21.0625 96.4857 25.1375C96.4857 29.0125 94.0107 31.5875 90.4607 31.5875C88.7107 31.5875 87.2107 30.8125 86.5357 29.6625L86.3357 31.2625ZM86.5857 24.9375C86.5857 26.8125 87.8357 28.0625 89.6357 28.0625C91.4607 28.0625 92.6107 26.7875 92.6107 24.9375C92.6107 23.0875 91.4607 21.8125 89.6357 21.8125C87.8357 21.8125 86.5857 23.0625 86.5857 24.9375Z"
            fill="#1D1D1D"
          ></path>
          <path
            d="M99.177 31.2625V12.7625H106.877C110.602 12.7625 112.852 14.7125 112.852 17.8875C112.852 19.8625 111.952 21.3125 110.277 22.0375C112.102 22.6375 113.077 24.0625 113.077 26.1625C113.077 29.4375 110.877 31.2625 106.877 31.2625H99.177ZM106.452 16.3125H103.227V20.3375H106.452C107.902 20.3375 108.702 19.6125 108.702 18.2875C108.702 16.9875 107.927 16.3125 106.452 16.3125ZM106.652 23.7375H103.227V27.7125H106.652C108.152 27.7125 108.927 27.0375 108.927 25.6625C108.927 24.4125 108.127 23.7375 106.652 23.7375Z"
            fill="#1D1D1D"
          ></path>
          <path
            d="M114.653 24.9875C114.653 21.0375 117.553 18.3875 121.553 18.3875C125.528 18.3875 128.428 21.0375 128.428 24.9875C128.428 28.9375 125.528 31.5625 121.553 31.5625C117.553 31.5625 114.653 28.9375 114.653 24.9875ZM118.528 24.9625C118.528 26.8625 119.753 28.1125 121.553 28.1125C123.328 28.1125 124.553 26.8625 124.553 24.9625C124.553 23.0875 123.328 21.8375 121.553 21.8375C119.753 21.8375 118.528 23.0875 118.528 24.9625Z"
            fill="#1D1D1D"
          ></path>
          <path
            d="M134.435 31.5875C131.785 31.5875 130.135 30.0375 130.135 27.5875C130.135 25.2875 131.76 23.8625 134.76 23.6375L138.26 23.3625V23.1625C138.26 21.9375 137.51 21.2875 136.135 21.2875C134.51 21.2875 133.635 21.9125 133.635 23.0375H130.435C130.435 20.2125 132.76 18.3625 136.335 18.3625C139.96 18.3625 142.01 20.3875 142.01 23.9625V31.2625H138.61L138.36 29.6125C137.96 30.7625 136.31 31.5875 134.435 31.5875ZM135.785 28.7375C137.26 28.7375 138.285 28.0125 138.285 26.5875V25.9125L136.335 26.0875C134.66 26.2375 134.06 26.6125 134.06 27.4125C134.06 28.3125 134.61 28.7375 135.785 28.7375Z"
            fill="#1D1D1D"
          ></path>
          <path
            d="M153.371 18.7625V22.3875H152.146C149.946 22.3875 148.621 23.3625 148.621 25.8375V31.2625H144.771V18.7875H148.396L148.596 20.6375C149.121 19.4125 150.221 18.5875 151.896 18.5875C152.346 18.5875 152.846 18.6375 153.371 18.7625Z"
            fill="#1D1D1D"
          ></path>
          <path
            d="M160.202 31.5875C156.602 31.5875 154.277 29.0375 154.277 25.0875C154.277 21.1125 156.652 18.3625 160.452 18.3625C162.002 18.3625 163.477 18.9875 164.202 19.9125V12.4125H168.052V31.2625H164.427L164.227 29.6625C163.552 30.8125 162.002 31.5875 160.202 31.5875ZM161.127 28.0625C162.927 28.0625 164.177 26.8125 164.177 24.9375C164.177 23.0625 162.927 21.8125 161.127 21.8125C159.302 21.8125 158.152 23.0875 158.152 24.9375C158.152 26.7875 159.302 28.0625 161.127 28.0625Z"
            fill="#1D1D1D"
          ></path>
          <path
            d="M173.343 31.5875C172.068 31.5875 171.043 30.5625 171.043 29.3375C171.043 28.0875 172.068 27.0625 173.343 27.0625C174.568 27.0625 175.643 28.0875 175.643 29.3375C175.643 30.5625 174.568 31.5875 173.343 31.5875Z"
            fill="#1D1D1D"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_19404_2964"
              x1="5.14205"
              y1="7.05282"
              x2="45.2356"
              y2="31.3983"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFCB3B"></stop>
              <stop offset="0.28" stop-color="#FD7E40"></stop>
              <stop offset="0.67" stop-color="#8F66FF"></stop>
              <stop offset="0.89" stop-color="#4DD7BE"></stop>
            </linearGradient>
            <clipPath id="clip0_19404_2964">
              <rect width="44" height="44" fill="white" transform="translate(2)"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>

    <div class="UNSTABLE_FooterContent__slot UNSTABLE_FooterContent__slot--center">
      <ul class="UNSTABLE_FooterContent__logoList">
        <li>
          <a
            aria-label="Watch JobBoard on Facebook"
            title="Watch JobBoard on Facebook"
            class="Button Button--secondary Button--medium Button--square"
            href="www.example.com"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <use xlink:href="/assets/icons/svg/sprite.svg#logo-facebook" />
            </svg>
          </a>
        </li>

        <li>
          <a
            aria-label="Watch JobBoard on X"
            title="Watch JobBoard on X"
            class="Button Button--secondary Button--medium Button--square"
            href="www.example.com"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <use xlink:href="/assets/icons/svg/sprite.svg#logo-x" />
            </svg>
          </a>
        </li>

        <li>
          <a
            aria-label="Watch JobBoard on Youtube"
            title="Watch JobBoard on Youtube"
            class="Button Button--secondary Button--medium Button--square"
            href="www.example.com"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <use xlink:href="/assets/icons/svg/sprite.svg#logo-youtube" />
            </svg>
          </a>
        </li>

        <li>
          <a
            aria-label="Watch JobBoard on LinkedIn"
            title="Watch JobBoard on LinkedIn"
            class="Button Button--secondary Button--medium Button--square"
            href="www.example.com"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <use xlink:href="/assets/icons/svg/sprite.svg#logo-linkedin" />
            </svg>
          </a>
        </li>

        <li>
          <a
            aria-label="Watch JobBoard on Google"
            title="Watch JobBoard on Google"
            class="Button Button--secondary Button--medium Button--square"
            href="www.example.com"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <use xlink:href="/assets/icons/svg/sprite.svg#logo-google" />
            </svg>
          </a>
        </li>
      </ul>
    </div>

    <div class="UNSTABLE_FooterContent__slot UNSTABLE_FooterContent__slot--right">
      <div class="Select">
        <label for="select-simple-1" class="Select__label Select__label--hidden">Choose language</label>
        <div class="Select__inputContainer">
          <select id="select-simple-1" name="default" class="Select__input">
            <option value="en-US">English</option>
            <option value="cs-CZ">Čeština</option>
          </select>
          <div class="Select__icon">
            <svg width="24" height="24" aria-hidden="true">
              <use xlink:href="/assets/icons/svg/sprite.svg#chevron-down" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  …
</footer>
```

### Footer Columns Variation

In case you need a specific number of columns for each row in the Footer Columns section with links,
you can use separated `Grid` components. The number of columns can be set for each breakpoint separately.

```html
<footer class="UNSTABLE_Footer">
  <div class="Container">
    <div class="Grid Grid--cols-1 Grid--tablet--cols-3 Grid--desktop--cols-6 mb-tablet-600 mb-desktop-400">
      <nav aria-labelledby="footer-with-a-lot-of-blocks-part-one" class="mb-600 mb-tablet-400 mb-desktop-800">
        <h3 class="typography-body-large-text-bold mb-600" id="footer-with-a-lot-of-blocks-part-one">
          Section headline
        </h3>

        <ul class="Stack Stack--hasSpacing" style="--stack-spacing: var(--spirit-space-500)">
          <li>
            <a href="www.example.com">Link</a>
          </li>

          <li>
            <a href="www.example.com">Link</a>
          </li>

          <li>
            <a href="www.example.com">Link</a>
          </li>

          <li>
            <a href="www.example.com">Link</a>
          </li>

          <li>
            <a href="www.example.com">Link</a>
          </li>
        </ul>
      </nav>

      <nav aria-labelledby="footer-with-a-lot-of-blocks-part-two" class="mb-600 mb-tablet-400 mb-desktop-800">…</nav>
      …
    </div>

    <div class="Grid Grid--cols-1 Grid--tablet--cols-3">
      <nav aria-labelledby="footer-with-a-lot-of-blocks-part-seven" class="mb-600 mb-tablet-800">…</nav>

      <nav aria-labelledby="footer-with-a-lot-of-blocks-part-eight" class="mb-600 mb-tablet-800">…</nav>
    </div>
  </div>
</footer>
```

## Color Variants

Currently, Footer comes in two color variants: **cover** (for light
backgrounds) and **inverted** (for dark backgrounds). Add `Footer--inverted`
modifier class to apply an inverted background color to the Footer.

⚠️ Keep in mind that it is necessary to set all the text and link content to the suitable color variant also.

```html
<footer class="UNSTABLE_Footer UNSTABLE_Footer--inverted">
  …
  <nav aria-labelledby="footer-inverse-part-one">
    <h3 class="typography-body-large-text-bold text-primary-inverted mb-600" id="footer-inverse-part-one">
      Section headline
    </h3>

    <ul class="Stack Stack--hasSpacing mb-600" style="--stack-spacing: var(--spirit-space-500)">
      <li>
        <a href="www.example.com" class="link-inverted">Link</a>
      </li>
      …
    </ul>
  </nav>
  …
  <div class="UNSTABLE_FooterContent__slot UNSTABLE_FooterContent__slot--center">
    <ul class="UNSTABLE_FooterContent__logoList">
      <li>
        <a class="Button Button--inverted Button--medium Button--square" href="www.example.com"> … </a>
      </li>
      …
    </ul>
  </div>
  …
</footer>
```
