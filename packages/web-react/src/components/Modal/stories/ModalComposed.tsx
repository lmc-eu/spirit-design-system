import React, { useState } from 'react';
import { ComponentStory } from '@storybook/react';
import Modal from '../Modal';
import ModalHeader from '../ModalHeader';
import ModalBody from '../ModalBody';
import ModalFooter from '../ModalFooter';
import { Button } from '../../Button';

const Story: ComponentStory<typeof Modal> = () => {
  const [defaultOpen, setDefaultOpen] = useState(false);
  const [longTextOpen, setLongTextOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setDefaultOpen(true)}>Open Modal</Button>
      <Button onClick={() => setLongTextOpen(true)}>Open Modal with long content</Button>
      <Modal id="DemoModalComposed" isOpen={defaultOpen} onClose={() => setDefaultOpen(false)}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          <p>
            Vestibulum nec, libero vitae iaculis metus a lorem ut id ante ultrices consequat non mauris, varius metus
            varius donec. Integer at nullam, augue libero id nullam sed ac sed placerat, in nisi sapien placerat vitae.
            Metus a lorem scelerisque, nunc nulla dui tellus aliquet fusce molestie, tristique elementum luctus in nisi
            curabitur. Faucibus vestibulum, turpis leo vitae sodales nulla vitae facilisis imperdiet, lorem varius urna
            aenean. Aenean sollicitudin, tellus integer interdum convallis pharetra fermentum sapien, bibendum nam
            ullamcorper justo. Metus a lorem ligula, dui augue elementum augue sem lobortis lorem ipsum ut, nulla
            maximus non congue sollicitudin.
            <br />
            Et ligula, fusce vitae metus lacinia in donec pharetra ornare volutpat, quisque metus a lorem vitae nisi
            commodo. Bibendum vel, placerat maximus molestie lorem ipsum molestie at nullam congue nulla, consequat
            consequat metus aliquet. A fringilla, euismod auctor vehicula imperdiet ligula integer vitae, consequat cras
            dictum odio euismod. Ullamcorper ornare, tortor purus sapien sem odio egestas proin tincidunt, scelerisque
            viverra suspendisse nibh maximus. Nulla curabitur, finibus quis nullam tincidunt consectetur quisque
            bibendum sodales, varius urna donec sed. Non congue nec commodo, libero nec nunc odio leo sagittis quisque
            curabitur, nulla ultrices in nisi sem.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Button</Button>
          <Button color="secondary" onClick={() => setDefaultOpen(false)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      <Modal id="DemoModalComposed2" isOpen={longTextOpen} onClose={() => setLongTextOpen(false)}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          <p>
            Lorem ipsum ut, integer dolor quis eget elit arcu vestibulum dui, magna iaculis phasellus nec. Egestas nec
            commodo, consectetur nulla ut porttitor turpis et vehicula nulla, rhoncus at in donec dolor sit amet sed
            vitae. Fusce vitae enim in, lectus auctor proin dui aenean enim feugiat, tellus non quis orci finibus quis.
            Aliquam luctus, a lacinia posuere ut ligula curabitur dolor sit amet ipsum, augue id dolor etiam praesent.
            Elit neque, sollicitudin sollicitudin tempus a proin congue nulla sit amet libero, felis scelerisque ut id
            ante porttitor consectetur. Enim in in ex sem, porta dui vel elit quis odio posuere placerat sollicitudin,
            iaculis dolor quis aliquam rhoncus.
            <br />
            Mi orci nisi commodo, ac nibh hendrerit eget lacinia dui aliquet condimentum, sollicitudin et elit quisque
            ut hendrerit. Integer felis scelerisque, dui et tempus laoreet dui quam egestas ultricies id, cras dictum
            commodo fusce vitae nullam. Et iaculis consequat, eget arcu sapien ligula nunc libero vitae at sem,
            consequat quam proin imperdiet. Nunc nunc, porttitor donec consequat ollicitudin sollicitudin aliquet id, at
            sem proin cras dictum duis id. Tellus nulla a, elit dui vel dolor dui non nulla commodo et dui, mauris eu
            proin bibendum auctor. Facilisis mi orci, condimentum aliquet quam faucibus rutrum pretium accumsan luctus,
            a consectetur elit nec.
            <br />
            Odio sagittis, erat ipsum a neque molestie sapien bibendum, molestie ipsum iaculis aliquam. Maximus
            consequat, varius proin vel arcu dui vel dolor non nulla fusce vel arcu, proin ut lacinia urna. Fringilla
            elit, ligula et nunc ac hendrerit maximus aliquam interdum, auctor varius nulla tempus a. Hendrerit
            fringilla, ac nec lorem in nisi quam ac nec ligula pulvinar, metus nunc dolor ut egestas. Adipiscing
            ultricies, molestie ornare dui ligula ollicitudin viverra nec, odio morbi consectetur hendrerit accumsan.
            Odio leo proin, curabitur fermentum iaculis non nunc tortor vitae, tristique aliquet sapien at sem.
            <br />
            Nullam finibus, nunc nunc suscipit nec purus rhoncus at sollicitudin, ut posuere suscipit pharetra. Ornare
            quam, volutpat enim in vitae aenean ipsum non leo vitae, rhoncus erat arcu euismod libero vitae. Rhoncus
            erat augue, lacinia id dolor quam fermentum interdum potenti semper, a libero feugiat ollicitudin. Odio leo
            metus, mi orci ligula placerat aliquam lacinia lectus finibus quis, a id tortor curabitur. Et neque,
            elementum nulla a ut iaculis nec dolor ut vehicula, porttitor egestas elit sit amet. Augue mauris, fermentum
            quam phasellus suspendisse adipiscing elementum luctus dui et tempus, duis id maximus quam arcu.
            <br />
            Sollicitudin convallis, quis suspendisse nunc integer auctor posuere non mauris, vestibulum iaculis varius
            suscipit. Nibh maximus tellus, venenatis sem lobortis ligula erat finibus quis vulputate fusce gravida,
            metus ullamcorper ligula libero. Rhoncus erat pretium accumsan, aliquet sed vitae fringilla ut venenatis
            molestie et nisi non mauris, bibendum consectetur ut id ante egestas. Mi orci imperdiet, id maximus vehicula
            hendrerit faucibus aliquet non, dolor ut ornare accumsan sed porttitor. Fringilla augue, id posuere mauris
            et fusce vitae mollis dui, sollicitudin dolor quis fusce gravida integer. A ullamcorper, semper fusce
            gravida quam scelerisque non nulla magna et ullamcorper, porta viverra ante mauris eu.
            <br />
            Suspendisse vitae, augue integer scelerisque vulputate mauris libero vitae vestibulum, tortor integer odio
            morbi vivamus. Accumsan nec, ut sapien ipsum ullamcorper condimentum ac nibh commodo, maximus augue lacinia
            ac nec. Nulla nunc, fusce gravida aenean quis egestas ultrices auctor nibh, integer convallis sollicitudin
            vulputate. Aliquet dui et tempus, nunc et nisl congue nulla vitae massa duis id mauris mi orci, fringilla
            facilisis aliquam aliquet. Lacinia vitae, morbi ullamcorper purus et cursus sed semper, vehicula bibendum
            feugiat libero sed. Finibus sed vitae, nulla sed odio leo commodo finibus ac nibh sit amet, urna adipiscing
            viverra turpis.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Button</Button>
          <Button color="secondary" onClick={() => setLongTextOpen(false)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

Story.args = {};

export default Story;
