import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Collapse from './Collapse';
import { Button } from '../Button';
import { CollapseRenderProps, CollapseProps } from '../../types';

export default {
  title: 'Components/Collapse',
  argTypes: {},
} as ComponentMeta<typeof Collapse>;

const Template = (args: CollapseProps) => <Collapse {...args} />;
const WrappredTemplate = (args: CollapseProps) => (
  <div>
    Condimentum odio, pulvinar et sollicitudin accumsan ac hendrerit vestibulum commodo, molestie laoreet dui sit amet.
    Molestie consectetur, sed ac felis scelerisque lectus accumsan purus id dolor sed vitae, praesent aliquam dolor quis
    ornare. Nulla sit amet, rhoncus at quis odio et iaculis lacinia suscipit vivamus sodales, nunc id condimentum felis.
    Consectetur nec commodo, praesent et elit magna purus molestie cursus molestie, libero ut venenatis erat id et nisi.
    Quam posuere, aliquam quam leo vitae tellus semper eget nunc, ultricies adipiscing sit amet accumsan. Lorem rutrum,
    porttitor ante mauris suspendisse ultricies consequat purus, congue a commodo magna et.
    <br />
    Nunc potenti, mauris sollicitudin purus augue justo et condimentum, vivamus a ornare consequat. Aliquet ut, metus
    libero vitae volutpat felis a iaculis sapien dolor quis, augue fermentum donec urna. Sem facilisis, finibus non
    mauris suspendisse varius et nisi egestas potenti, praesent interdum nulla sem. Sodales dui, quam sagittis sapien
    elit lorem fringilla hendrerit nunc, porttitor quis dolor ut sit amet. Scelerisque aliquet, maximus integer cursus
    fusce vitae proin lacinia sed vitae, bibendum suspendisse nunc ut enim et at. Sem turpis, iaculis a eget non mauris
    nulla vitae augue, molestie porttitor luctus bibendum.
    <Collapse {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  id: 'DemoCollapse',
  renderTrigger: ({ collapsed, trigger }: CollapseRenderProps) => (
    <Button {...trigger}>Trigger ({collapsed ? 'open' : 'closed'})</Button>
  ),
  children: (
    <>
      <p>
        Commodo urna, ultrices porta dolor sit amet morbi libero lorem ipsum venenatis, quam congue consectetur
        pellentesque. Proin pharetra, accumsan ipsum cras dictum aliquam efficitur proin consectetur, viverra metus dui
        a lacinia. Odio magna et, molestie aliquet at nullam praesent vitae semper mauris, congue sapien sollicitudin
        pretium accumsan. Ac nec nulla a, turpis vulputate maximus aliquet et erat bibendum, non integer aliquam ut.
        Mollis sollicitudin, convallis ut id ante auctor scelerisque augue lorem dui, bibendum libero sed commodo arcu.
        Cursus consequat, tristique auctor suscipit dui vel dolor dui vel vitae placerat, fermentum sem cursus ut nisl
        mauris.
      </p>
      <p>
        Vitae sed, ullamcorper tristique vitae lectus quis mattis fringilla maximus, turpis cras dictum mi orci
        adipiscing. Rutrum sollicitudin, volutpat rhoncus erat dui et tempus donec quam in donec nunc, urna molestie
        dignissim phasellus. Metus ligula, sapien aliquet scelerisque vitae fringilla etiam nunc, nulla quam tristique
        sed ac. Venenatis semper, dui id volutpat ullamcorper semper tortor ac hendrerit, iaculis lorem ipsum interdum
        enim in. Efficitur suspendisse, ultricies aliquam venenatis purus imperdiet nullam ullamcorper, dui vel dolor
        leo vitae nunc a. Pharetra laoreet, curabitur nec sem urna et nam integer, condimentum quam ipsum diam a.
      </p>
    </>
  ),
};

export const Responsive = Template.bind({});
Responsive.args = {
  id: 'DemoCollapseResponsive',
  renderTrigger: ({ collapsed, trigger, triggerHidden }: CollapseRenderProps) => (
    <Button {...trigger}>
      Trigger ({collapsed ? 'open' : 'closed'}) {triggerHidden && '... should be hidden'}
    </Button>
  ),
  children: (
    <>
      <p>
        Commodo urna, ultrices porta dolor sit amet morbi libero lorem ipsum venenatis, quam congue consectetur
        pellentesque. Proin pharetra, accumsan ipsum cras dictum aliquam efficitur proin consectetur, viverra metus dui
        a lacinia. Odio magna et, molestie aliquet at nullam praesent vitae semper mauris, congue sapien sollicitudin
        pretium accumsan. Ac nec nulla a, turpis vulputate maximus aliquet et erat bibendum, non integer aliquam ut.
        Mollis sollicitudin, convallis ut id ante auctor scelerisque augue lorem dui, bibendum libero sed commodo arcu.
        Cursus consequat, tristique auctor suscipit dui vel dolor dui vel vitae placerat, fermentum sem cursus ut nisl
        mauris.
      </p>
      <p>
        Vitae sed, ullamcorper tristique vitae lectus quis mattis fringilla maximus, turpis cras dictum mi orci
        adipiscing. Rutrum sollicitudin, volutpat rhoncus erat dui et tempus donec quam in donec nunc, urna molestie
        dignissim phasellus. Metus ligula, sapien aliquet scelerisque vitae fringilla etiam nunc, nulla quam tristique
        sed ac. Venenatis semper, dui id volutpat ullamcorper semper tortor ac hendrerit, iaculis lorem ipsum interdum
        enim in. Efficitur suspendisse, ultricies aliquam venenatis purus imperdiet nullam ullamcorper, dui vel dolor
        leo vitae nunc a. Pharetra laoreet, curabitur nec sem urna et nam integer, condimentum quam ipsum diam a.
      </p>
    </>
  ),
  responsive: 'tablet',
};

export const HideOnClose = WrappredTemplate.bind({});
HideOnClose.args = {
  id: 'DemoCollapseHideOnClose',
  renderTrigger: ({ collapsed, trigger: { onClick } }: CollapseRenderProps) => (
    <a href="#" onClick={onClick}>
      Trigger ({collapsed ? 'open' : 'closed'})
    </a>
  ),
  children: (
    <>
      Commodo urna, ultrices porta dolor sit amet morbi libero lorem ipsum venenatis, quam congue consectetur
      pellentesque. Proin pharetra, accumsan ipsum cras dictum aliquam efficitur proin consectetur, viverra metus dui a
      lacinia. Odio magna et, molestie aliquet at nullam praesent vitae semper mauris, congue sapien sollicitudin
      pretium accumsan. Ac nec nulla a, turpis vulputate maximus aliquet et erat bibendum, non integer aliquam ut.
      Mollis sollicitudin, convallis ut id ante auctor scelerisque augue lorem dui, bibendum libero sed commodo arcu.
      Cursus consequat, tristique auctor suscipit dui vel dolor dui vel vitae placerat, fermentum sem cursus ut nisl
      mauris.
    </>
  ),
  hideOnCollapse: true,
  elementType: 'span',
  contentProps: {
    elementType: 'span',
  },
};
