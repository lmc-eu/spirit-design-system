import React from 'react';
import { Container, Footer, Grid, GridItem, Heading, Link, Stack, Text } from '../../../src/components';
import { Sizes } from '../../../src/constants';
import styles from './CorporateFooter.module.scss';

export default {
  title: 'Examples/Compositions/Footer',
};

export const CorporateFooter = () => (
  <Footer className={styles.CorporateFooter} id="corporate-footer" data-footer-id="base" data-footer-version="5">
    <Container>
      <Heading elementType="h3" UNSAFE_className="text-center" marginBottom="space-1300">
        We are a&nbsp;member of <span className={styles.CorporateFooter__headingDecoration}>Alma Career</span> family.
      </Heading>

      <Grid
        cols={{ desktop: 5, tablet: 3, mobile: 2 }}
        alignmentX="stretch"
        alignmentY="stretch"
        marginBottom="space-1300"
        spacingX="space-900"
        spacingY="space-1100"
      >
        <GridItem columnStart={1} columnEnd="span 2" aria-labelledby="corporate-footer-heading-central-europe">
          <Heading
            elementType="h4"
            size={Sizes.SMALL}
            id="corporate-footer-heading-central-europe"
            marginBottom="space-900"
          >
            Central Europe
          </Heading>

          <Stack
            elementType="ul"
            className={`${styles.CorporateFooter__list} ${styles['CorporateFooter__list--columns']}`}
          >
            <li>
              <Link href="https://www.jobs.cz/" color="secondary" title="Jobs.cz – největší kariérní portál v ČR.">
                Jobs.cz
              </Link>
            </li>
            <li>
              <Link
                href="https://www.profesia.sk/"
                color="secondary"
                title="PROFESIA.SK | Práca, zamestnanie, ponuka práce, brigády, voľné pracovné miesta"
              >
                Profesia.sk
              </Link>
            </li>
            <li>
              <Link
                href="https://www.profesia.cz/"
                color="secondary"
                title="Tisíce pracovních příležitostí pro každého."
              >
                Profesia.cz
              </Link>
            </li>
            <li>
              <Link
                href="https://www.prace.cz/"
                color="secondary"
                title="Prace.cz – nejvíce pracovních nabídek na jednom místě."
              >
                Prace.cz
              </Link>
            </li>
            <li>
              <Link
                href="https://www.pracazarohom.sk/"
                color="secondary"
                title="Prestaňte dochádzať a nájdite si prácu blízko domova. U nás si nájdete prácu, ktorá vám bude vyhovovať, či už v malej rodinnej firme alebo vo veľkej spoločnosti."
              >
                Práca za rohom
              </Link>
            </li>
            <li>
              <Link
                href="https://www.pracezarohem.cz/"
                color="secondary"
                title="Na Práci za rohem máte největší šanci najít si práci blízko domova, bez dojíždění."
              >
                Práce za rohem
              </Link>
            </li>
            <li>
              <Link
                href="https://www.pracazarogiem.pl/"
                color="secondary"
                title="Nie marnuj czasu na dojazdy – pracuj w miejscu zamieszkania. U nas znajdziesz pracę na miarę swoich potrzeb: w małej rodzinnej firmie albo w dużej korporacji."
              >
                Praca za rogiem
              </Link>
            </li>
            <li>
              <Link
                href="https://www.atmoskop.cz/"
                color="secondary"
                title="Na Atmoskop.cz najdete pracovní nabídky firem přesně podle vašich představ."
              >
                Atmoskop
              </Link>
            </li>

            <li>
              <Link
                href="https://www.arnold-robot.com/"
                color="secondary"
                title="Arnold Robot – A chatbot that coaxes it out of employees"
              >
                Arnold
              </Link>
            </li>
            <li>
              <Link
                href="https://www.teamio.com/"
                color="secondary"
                title="Teamio – váš partner pro profesionální nábor."
              >
                Teamio
              </Link>
            </li>
            <li>
              <Link
                href="https://www.seduo.cz/"
                color="secondary"
                title="Největší česko-slovenská online vzdělávací platforma s kurzy od hvězd ve svých oborech."
              >
                Seduo.cz
              </Link>
            </li>
            <li>
              <Link
                href="https://www.seduo.sk/"
                color="secondary"
                title="Najväčšia česko-slovenská online vzdelávacia platforma s videokurzami."
              >
                Seduo.sk
              </Link>
            </li>
            <li>
              <Link
                href="https://www.seduo.pl/"
                color="secondary"
                title="Kursy online, webinary, szkolenia i kształcenie profesjonalne – Seduo.pl"
              >
                Seduo.pl
              </Link>
            </li>
            <li>
              <Link
                href="https://www.platy.cz/"
                color="secondary"
                title="Porovnávač platů v Českej republike, Průzkum mezd na trhu."
              >
                Platy.cz
              </Link>
            </li>
            <li>
              <Link
                href="https://www.platy.sk/"
                color="secondary"
                title="Porovnávač platov na Slovensku, Prieskum miezd na trhu."
              >
                Platy.sk
              </Link>
            </li>
            <li>
              <Link
                href="https://www.paylab.com/"
                color="secondary"
                title="Salaries by job positions in the world – Paylab.com"
              >
                Paylab.com
              </Link>
            </li>
          </Stack>
        </GridItem>
        <nav aria-labelledby="corporate-footer-heading-baltics">
          <Heading elementType="h4" size={Sizes.SMALL} id="corporate-footer-heading-baltics" marginBottom="space-900">
            Baltics
          </Heading>

          <Stack elementType="ul" className={styles.CorporateFooter__list}>
            <li>
              <Link
                href="https://www.cvonline.lt/"
                color="secondary"
                title="Naujausi darbo pasiūlymai (3000+) | CVonline.lt"
              >
                CVonline.lt
              </Link>
            </li>
            <li>
              <Link
                href="https://www.cv.lv/"
                color="secondary"
                title="Sākums | CV-Online – darba piedāvājumi, vakances, CV, personāla atlase"
              >
                CV.lv
              </Link>
            </li>
            <li>
              <Link
                href="https://www.cv.ee/"
                color="secondary"
                title="Tööpakkumised, töökuulutused, vabad töökohad | CV.ee"
              >
                CV.ee
              </Link>
            </li>
            <li>
              <Link
                href="https://www.dirbam.lt/"
                color="secondary"
                title="Daugiau nei 20.000 darbo pasiūlymų vienoje vietoje | Dirbam.lt"
              >
                Dirbam.It
              </Link>
            </li>
            <li>
              <Link
                href="https://www.visidarbi.lv/"
                color="secondary"
                title="Visas Vakances un Darba Sludinājumi | VisiDarbi.lv"
              >
                Visidarbi.lv
              </Link>
            </li>
            <li>
              <Link
                href="https://www.otsintood.ee/"
                color="secondary"
                title="Tööpakkumised, töökuulutused, vabad töökohad | Otsintööd.ee"
              >
                Otsintood.ee
              </Link>
            </li>
            <li>
              <Link
                href="https://personaloatrankos.lt/"
                color="secondary"
                title="Personalo Atrankos | CV-Online Recruitment"
              >
                Personaloatrankos.lt
              </Link>
            </li>
            <li>
              <Link
                href="https://recruitment.lv/"
                color="secondary"
                title="CV-Online Recruitment | Personāla atlase Latvijā, Baltijā"
              >
                Recruitment.lv
              </Link>
            </li>
            <li>
              <Link
                href="https://cvonline.varbamisteenused.ee/"
                color="secondary"
                title="Värbamisteenused, personaliotsing tööandjatele | CV-Online"
              >
                Varbamisteenused.ee
              </Link>
            </li>
          </Stack>
        </nav>
        <nav aria-labelledby="corporate-footer-heading-adriatic">
          <Heading elementType="h4" size={Sizes.SMALL} marginBottom="space-900" id="corporate-footer-heading-adriatic">
            Adriatic
          </Heading>

          <Stack elementType="ul" className={styles.CorporateFooter__list}>
            <li>
              <Link
                href="https://www.moj-posao.net/"
                color="secondary"
                title="MojPosao.net - Posao i savjeti za razvoj karijere"
              >
                MojPosao
              </Link>
            </li>
            <li>
              <Link
                href="https://www.mojposao.ba/"
                color="secondary"
                title="MojPosao.ba | Vodeći portal za zapošljavanje"
              >
                MojPosao.ba
              </Link>
            </li>
            <li>
              <Link
                href="https://www.deloglasnik.si/"
                color="secondary"
                title="Prosta delovna mesta, zaposlitev in karierni nasveti | Deloglasnik"
              >
                Deloglasnik
              </Link>
            </li>
            <li>
              <Link
                href="https://www.vrabotuvanje.com.mk"
                color="secondary"
                title="Огласи за работа и совети за кариера"
              >
                Vrabotuvanje
              </Link>
            </li>
            <li>
              <Link href="https://www.poslovac.net" color="secondary" title="Poslovac | Tvoj lovac na posao">
                Poslovac
              </Link>
            </li>
            <li>
              <Link
                href="https://www.hercul.hr"
                color="secondary"
                title="Hercul - Cjeloviti alat za predselekciju kandidata"
              >
                Hercul.hr
              </Link>
            </li>
            <li>
              <Link
                href="https://virtualvalley.net"
                color="secondary"
                title="Virtualvalley | We know how to make great virtual fairs"
              >
                Virtual Valley
              </Link>
            </li>
            <li>
              <Link
                href="https://zadovoljstvozaposlenika.hr"
                color="secondary"
                title="Istraživanje zadovoljstva zaposlenika"
              >
                Pulser
              </Link>
            </li>
          </Stack>
        </nav>
        <nav aria-labelledby="corporate-footer-heading-scandinavia">
          <Heading
            elementType="h4"
            size={Sizes.SMALL}
            marginBottom="space-900"
            id="corporate-footer-heading-scandinavia"
          >
            Scandinavia
          </Heading>

          <Stack elementType="ul" className={styles.CorporateFooter__list}>
            <li>
              <Link href="https://www.jobly.fi/" color="secondary" title="Katso avoimet työpaikat | Jobly.fi">
                Jobly.fi
              </Link>
            </li>
          </Stack>
        </nav>
      </Grid>

      <div className="mb-700 text-center">
        <Link href="https://www.almacareer.com/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 89" width="190" height="89">
            <g>
              <path d="m189.527 0h-189.054161v88.3379h189.054161z" fill="none"></path>
              <path
                d="m53.5616 15.3904h-27.1401c-5.8583 0-10.5913 4.733-10.5913 10.5913v27.4711c0 5.8583 4.733 10.5913 10.5913 10.5913h9.6314c1.026 0 2.5485.2648 3.8394.5296.6288.1324 1.2246.2648 1.6217.3641.1986.0662.3641.0993.4965.1324.0662 0 .0993.0331.1324.0331h.0331.0331c.0331 0 .0993.033.1655.0661.1324.0662.331.1324.5957.2317.5296.1986 1.2578.4634 2.1845.7944 1.8204.6619 4.2696 1.5556 6.785 2.4492 5.064 1.8204 10.4589 3.8063 11.7828 4.3027l.4634.1655v-.4634-46.6678c-.0331-5.8583-4.7661-10.5913-10.6244-10.5913z"
                fill="#1d1d1f"
              ></path>
              <g className="almc-footer__logo-outline">
                <linearGradient
                  id="logo-outline-gradient"
                  gradientUnits="userSpaceOnUse"
                  x1="18.7942"
                  x2="64.3569"
                  y1="24.2939"
                  y2="58.3544"
                >
                  <stop offset="0" stop-color="#ffcb3b"></stop>
                  <stop offset=".03" stop-color="#feba3c"></stop>
                  <stop offset=".09" stop-color="#fda03d"></stop>
                  <stop offset=".15" stop-color="#fd8d3f"></stop>
                  <stop offset=".21" stop-color="#fd813f"></stop>
                  <stop offset=".28" stop-color="#fd7e40"></stop>
                  <stop offset=".67" stop-color="#8f66ff"></stop>
                  <stop offset=".89" stop-color="#4dd7be"></stop>
                </linearGradient>
                <path
                  clip-rule="evenodd"
                  d="m66.1893 74.1243-2.6489-.9536c-1.3081-.4768-6.6058-2.3521-11.6093-4.1003-2.4853-.89-4.9053-1.7483-6.7039-2.3522-.883-.3178-1.6351-.5721-2.1584-.7628l-.7194-.2543c-.0327 0-.0654 0-.0981-.0318-.0981-.0318-.2616-.0636-.4579-.1271-.3924-.0954-.9483-.2225-1.5697-.3497-1.2753-.2543-2.6488-.4768-3.4664-.4768h-9.4836c-6.6713 0-12.0999-5.2764-12.0999-11.7607v-26.4139c0-6.4843 5.4286-11.7607 12.0999-11.7607h26.8158c6.6712 0 12.0998 5.2764 12.0998 11.7607zm-23.2513-10.2986s13.8004 4.8632 19.327 6.834c.9157.3178 1.6025.5721 1.9622.6992v-44.8178c0-5.4354-4.5456-9.8536-10.1377-9.8536h-26.8158c-5.5921 0-10.1377 4.4182-10.1377 9.8536v26.3821c0 5.4354 4.5456 9.8536 10.1377 9.8536h9.5163c2.0929 0 6.148 1.0489 6.148 1.0489z"
                  fill="url(#logo-outline-gradient)"
                  fill-rule="evenodd"
                ></path>
              </g>
              <g className="almc-footer__logo-text">
                <path d="m94.7021 38.0624c.1986.5296.3641.8275.4965 1.0922.1324.2317.3641.4965.6619.7944.2979.2979.7613.5957 1.357.9267v.1986h-10.161v-.1986c.7944-.3972 1.357-.7281 1.688-1.026.2979-.2979.4634-.6289.4634-1.026 0-.3972-.1655-1.0261-.4965-1.9528l-1.1253-3.045h-7.0498l-.2648.6951c-.6289 1.8203-.9598 3.0449-.9598 3.6407s.1985 1.0591.5626 1.4563.993.8275 1.8866 1.2577v.1986h-6.6196v-.1986c1.0923-.8605 1.8866-1.688 2.3831-2.4823.4965-.7944 1.0591-2.019 1.688-3.707l4.3689-11.7828-1.1254-2.1182c1.9197-.7282 3.5084-1.4563 4.6668-2.2838zm-7.6787-5.7259-3.0119-8.2413-2.9788 8.2413z"></path>
                <path d="m97.714 40.8757c.7944-.3971 1.2908-.7943 1.5225-1.1584.1986-.3641.331-1.0922.331-2.1844v-13.7356c0-.9598-.0662-1.7211-.1986-2.2176-.1324-.4964-.2979-.8605-.4965-1.026s-.5626-.4303-1.1253-.8274v-.1986c2.3169-.1655 4.5339-.5627 6.6199-1.1584v19.1636c0 1.0922.099 1.8203.331 2.1844.231.3641.728.7613 1.489 1.1584v.1986h-8.473z"></path>
                <path d="m132.434 37.4997c0 1.0922.099 1.8204.331 2.1845.231.364.728.7612 1.522 1.1584v.1986h-8.473v-.1986c.827-.4303 1.357-.8274 1.556-1.1915.198-.3641.331-1.0923.364-2.1514 0-.8274.033-2.9126.033-6.2885 0-.9268-.232-1.6218-.662-2.1183-.43-.4634-.96-.7282-1.589-.7282-.993 0-1.886.6289-2.648 1.8535v7.2484c0 1.0922.1 1.8204.331 2.1845.199.3641.728.7612 1.523 1.1584v.1986h-8.473v-.1324c.794-.3972 1.324-.7944 1.555-1.1584.232-.3641.364-1.0923.364-2.1845 0-.5626.034-2.052.034-4.4682 0-1.8535-.166-3.0781-.464-3.7069-.298-.6289-.86-.9268-1.655-.9268-1.125 0-2.085.6289-2.846 1.8866v7.2153c0 1.0922.099 1.8204.331 2.1845.198.364.695.7612 1.456 1.1584v.1986h-8.44v-.1986c.795-.3972 1.291-.7944 1.523-1.1584.198-.3641.331-1.0923.331-2.1845v-6.1893c0-1.3239-.1-2.2175-.331-2.6809-.232-.4302-.728-.8936-1.523-1.357v-.1986c2.118-.1324 4.303-.4964 6.52-1.1584v3.3098c1.357-2.1514 3.112-3.2436 5.23-3.2436.927 0 1.82.2648 2.714.7613.86.4964 1.423 1.3239 1.688 2.4823 1.39-2.1514 3.144-3.2436 5.262-3.2436.464 0 .96.0662 1.457.2317.496.1324.96.3641 1.456.6619.463.2979.861.7613 1.192 1.3901.297.6289.463 1.3571.463 2.2176z"></path>
                <path d="m148.023 41.4715c-1.126 0-1.887-.331-2.317-.993-.431-.6619-.629-1.4232-.596-2.2506h-.033c-.463.8605-1.159 1.5887-2.118 2.2175-.96.6289-2.086.9599-3.343.9599-1.258 0-2.284-.331-3.045-.993-.761-.6619-1.159-1.4893-1.159-2.5154 0-1.4894.828-2.7471 2.516-3.7731 1.655-1.0261 4.071-1.9197 7.215-2.714l.066-2.4162c0-.5957-.132-1.0922-.397-1.5556-.298-.4302-.761-.6619-1.357-.6619-.927 0-1.688.4964-2.217 1.4563-.563.9929-.927 2.1513-1.126 3.4752l-.165.0331-3.31-1.9527c.563-1.0261 1.456-1.9197 2.714-2.6478 1.258-.7282 2.813-1.1254 4.667-1.1254 1.191 0 2.151.1655 2.979.4634.794.2979 1.39.7282 1.787 1.2908.364.5627.629 1.0922.794 1.6549.133.5627.199 1.1584.199 1.7873l-.166 7.2153c0 .6619.232.9929.762.9929.562 0 1.026-.3972 1.357-1.1915l.264.1324c-.264.8274-.761 1.5556-1.423 2.1182-.761.5958-1.522.993-2.548.993zm-5.793-2.6147c.993 0 1.92-.4965 2.748-1.5225l.132-5.2957c-3.144.9599-4.733 2.4493-4.733 4.5013 0 .7282.165 1.2908.53 1.688.331.4303.794.6289 1.323.6289z"></path>
                <path d="m86.7587 49.0509c-1.4232 0-2.6479.8605-3.7401 2.5816-1.1253 1.688-1.6549 4.2365-1.6549 7.6125 0 3.3759.5627 6.0569 1.688 7.8441 1.1253 1.7873 2.4161 2.681 3.8394 2.681 1.1915 0 2.4492-.5958 3.74-1.8535 1.3239-1.2246 2.5154-2.714 3.6738-4.4351h.1986l-.6288 6.1893c-2.4162.6619-4.8323 1.026-7.2153 1.026-1.4894 0-2.8795-.1986-4.1704-.6289-1.2908-.4302-2.4492-1.0591-3.5083-1.9196-1.026-.8606-1.8535-2.019-2.4492-3.4753-.5958-1.4563-.8937-3.1112-.8937-4.9978 0-3.6407 1.026-6.4871 3.1112-8.5061 2.0852-2.0189 4.733-3.0119 7.9766-3.0119 1.9858 0 4.3689.331 7.1491 1.0261l.6288 6.0899h-.1986c-2.8133-4.1372-5.2956-6.1892-7.4469-6.1892h-.0993z"></path>
                <path d="m108.967 70.6306c-1.125 0-1.886-.331-2.317-.9929-.43-.662-.628-1.4232-.595-2.2507h-.033c-.464.8606-1.159 1.5887-2.119 2.2176-.96.6288-2.085.9598-3.343.9598-1.2573 0-2.2833-.331-3.0446-.9929-.7612-.662-1.1584-1.4894-1.1584-2.5155 0-1.4894.8274-2.7471 2.5154-3.7731 1.6546-1.026 4.0706-1.9197 7.2156-2.714l.066-2.4162c0-.5957-.132-1.0922-.397-1.5555-.298-.4303-.761-.662-1.357-.662-.927 0-1.688.4965-2.218 1.4563-.562.9929-.927 2.1514-1.125 3.4753l-.166.0331-3.3094-1.9528c.5627-1.026 1.4563-1.9197 2.7144-2.6478 1.257-.7282 2.813-1.1253 4.666-1.1253 1.192 0 2.152.1654 2.979.4633.828.2979 1.39.7282 1.787 1.2908.365.5627.629 1.0923.795 1.6549.132.5627.198 1.1584.198 1.7873l-.165 7.2153c0 .662.232.9929.761.9929.563 0 1.026-.3971 1.357-1.1915l.265.1324c-.265.8275-.761 1.5556-1.423 2.1183-.662.5957-1.423.9598-2.449.9598zm-5.792-2.5816c.993 0 1.92-.4965 2.747-1.5225l.133-5.2957c-3.145.9599-4.733 2.4493-4.733 4.5013 0 .7282.165 1.2908.529 1.688s.761.5958 1.324.6289z"></path>
                <path d="m113.138 70.0679c.794-.3972 1.29-.7944 1.522-1.1584.199-.3641.331-1.0923.331-2.1845v-6.454c0-1.1585-.099-1.9859-.331-2.4493-.232-.4633-.728-.8936-1.522-1.3239v-.1986c2.151-.1324 4.335-.4964 6.52-1.1584l-.066 3.045h.066c.265-.7612.761-1.4563 1.522-2.0521.728-.6288 1.655-.9267 2.781-.9267.529 0 .992.1324 1.456.331l-.629 4.8653h-.199c-1.324-1.6548-2.416-2.4823-3.309-2.4823-.629 0-1.159.3641-1.49 1.1253v7.6456c0 1.0922.133 1.8204.397 2.1845.265.364.927.7612 1.953 1.1584v.1986h-9.036z"></path>
                <path d="m140.443 65.004c-.132.5957-.298 1.1584-.562 1.6879-.232.5296-.596 1.1254-1.06 1.7542-.463.6289-1.158 1.1584-2.019 1.5225-.86.3972-1.886.5958-3.011.5958-2.218 0-4.071-.6951-5.561-2.0852-1.489-1.3901-2.217-3.2436-2.217-5.5604s.728-4.1372 2.151-5.5604 3.31-2.1514 5.593-2.1514c1.192 0 2.251.1986 3.145.6289.926.4303 1.588.9267 2.085 1.5556.463.6288.827 1.2246 1.026 1.8204.199.5957.331 1.1584.331 1.6879v.3641h-9.996v.4303c0 1.9197.563 3.376 1.622 4.3027 1.092.9267 2.383 1.4232 3.873 1.4232 2.019 0 3.475-.8274 4.335-2.4823zm-7.215-9.0357c-.794 0-1.456.3972-1.92 1.1915-.496.7943-.794 1.9197-.893 3.3429l5.593-.0662c0-.4303-.066-.8937-.132-1.3239-.066-.4303-.199-.9268-.397-1.4232-.199-.4965-.497-.9268-.861-1.2247-.43-.3309-.861-.4964-1.39-.4964z"></path>
                <path d="m156.231 65.004c-.133.5957-.298 1.1584-.563 1.6879-.232.5296-.596 1.1254-1.059 1.7542-.463.6289-1.158 1.1584-2.019 1.5225-.86.3972-1.887.5958-3.012.5958-2.217 0-4.071-.6951-5.56-2.0852-1.49-1.3901-2.218-3.2436-2.218-5.5604s.728-4.1372 2.152-5.5604c1.423-1.4232 3.309-2.1514 5.593-2.1514 1.192 0 2.251.1986 3.144.6289.927.4303 1.589.9267 2.086 1.5556.463.6288.827 1.2246 1.026 1.8204.198.5957.331 1.1584.331 1.6879v.3641h-9.996v.4303c0 1.9197.563 3.376 1.622 4.3027 1.092.9267 2.383 1.4232 3.872 1.4232 2.019 0 3.475-.8274 4.336-2.4823zm-7.182-9.0357c-.795 0-1.457.3972-1.92 1.1915-.497.7943-.794 1.9197-.894 3.3429l5.594-.0662c0-.4303-.066-.8937-.133-1.3239-.066-.4303-.198-.9268-.397-1.4232-.198-.4965-.496-.9268-.86-1.2247-.431-.3309-.894-.4964-1.39-.4964z"></path>
                <path d="m157.058 70.0679c.795-.3972 1.291-.7944 1.523-1.1584.198-.3641.331-1.0923.331-2.1845v-6.454c0-1.1585-.1-1.9859-.331-2.4493-.232-.4633-.728-.8936-1.523-1.3239v-.1986c2.152-.1324 4.336-.4964 6.521-1.1584l-.067 3.045h.067c.264-.7612.794-1.4563 1.522-2.0521.728-.6288 1.655-.9267 2.78-.9267.53 0 .993.1324 1.457.331l-.629 4.8653h-.199c-1.324-1.6548-2.416-2.4823-3.31-2.4823-.629 0-1.158.3641-1.489 1.1253v7.6456c0 1.0922.132 1.8204.397 2.1845.265.364.927.7612 1.953 1.1584v.1986h-9.036z"></path>
                <path d="m171.191 70.4982c-.695 0-1.291-.2317-1.787-.7282-.497-.4964-.762-1.0591-.762-1.688 0-.6288.265-1.2577.762-1.721.496-.4634 1.092-.7282 1.787-.7282s1.258.2317 1.754.7282c.497.4964.761 1.0591.761 1.721 0 .662-.231 1.2247-.761 1.688-.496.4965-1.059.7282-1.754.7282z"></path>
              </g>
              <path
                d="m30.8897 23.0029c4.1041 0 7.447 3.3429 7.447 7.447s-3.3429 7.447-7.447 7.447c-4.1042 0-7.447-3.3429-7.447-7.447s3.3428-7.447 7.447-7.447z"
                fill="#ffcb3b"
              ></path>
              <path
                d="m52.2377 40.2137c-5.8252 0-10.5582 4.5344-10.8891 10.2603l-.0331.662v4.6337.331l15.2249 5.6266v-5.6266-1.9859-3.6408-4.9646-5.2957z"
                fill="#4dd7be"
              ></path>
              <path
                d="m41.3155 23.0029h8.6054c3.6407 0 6.6195 2.9788 6.6195 6.6196v8.2744h-15.2249z"
                fill="#8f66ff"
              ></path>
              <path
                d="m30.0622 56.1007h8.2745c0-.0993 0-.2317 0-.331v-4.6337c0-6.0238-4.8985-10.9223-10.9223-10.9223h-3.9717v9.2674c0 3.6408 2.9788 6.6196 6.6195 6.6196z"
                fill="#fd7e40"
              ></path>
            </g>
          </svg>
        </Link>
      </div>

      <Text marginBottom="space-1300" className="text-center">
        A&nbsp;better world of work for <em className={styles.CorporateFooter__claimDecoration}>everyone</em>.
      </Text>

      <p>© Alma Career Oy and its subsidiaries</p>
    </Container>
  </Footer>
);
