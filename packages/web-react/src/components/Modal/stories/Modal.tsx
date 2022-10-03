import React from 'react';
import { ComponentStory } from '@storybook/react';
import { SpiritModalProps } from '../../../types';
import Modal from '../Modal';

const Story: ComponentStory<typeof Modal> = (args: SpiritModalProps) => <Modal {...args} />;

Story.args = {
  id: 'DemoModal',
  isOpen: true,
  children: (
    <p>
      Vestibulum nec, libero vitae iaculis metus a lorem ut id ante ultrices consequat non mauris, varius metus varius
      donec. Integer at nullam, augue libero id nullam sed ac sed placerat, in nisi sapien placerat vitae. Metus a lorem
      scelerisque, nunc nulla dui tellus aliquet fusce molestie, tristique elementum luctus in nisi curabitur. Faucibus
      vestibulum, turpis leo vitae sodales nulla vitae facilisis imperdiet, lorem varius urna aenean. Aenean
      sollicitudin, tellus integer interdum convallis pharetra fermentum sapien, bibendum nam ullamcorper justo. Metus a
      lorem ligula, dui augue elementum augue sem lobortis lorem ipsum ut, nulla maximus non congue sollicitudin.
      <br />
      Et ligula, fusce vitae metus lacinia in donec pharetra ornare volutpat, quisque metus a lorem vitae nisi commodo.
      Bibendum vel, placerat maximus molestie lorem ipsum molestie at nullam congue nulla, consequat consequat metus
      aliquet. A fringilla, euismod auctor vehicula imperdiet ligula integer vitae, consequat cras dictum odio euismod.
      Ullamcorper ornare, tortor purus sapien sem odio egestas proin tincidunt, scelerisque viverra suspendisse nibh
      maximus. Nulla curabitur, finibus quis nullam tincidunt consectetur quisque bibendum sodales, varius urna donec
      sed. Non congue nec commodo, libero nec nunc odio leo sagittis quisque curabitur, nulla ultrices in nisi sem.
    </p>
  ),
  closeOnEscape: true,
};

export default Story;
