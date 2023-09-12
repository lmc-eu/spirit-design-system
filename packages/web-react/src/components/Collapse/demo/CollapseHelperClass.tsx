import React from 'react';
import { Button } from '../../Button';
import Collapse from '../Collapse';
import { useCollapse } from '../useCollapse';

const CollapseHelperClass = () => {
  const { isOpen, toggleHandler } = useCollapse(false);

  return (
    <>
      <p>
        Ante rhoncus, tristique nunc et elit id in ex sem consectetur id, consectetur et elit nibh sed ac. Sed ac
        convallis, sem lobortis convallis et nisi sapien in ex sem ullamcorper iaculis, aliquet sem lobortis
        pellentesque sit amet. Congue nulla congue, porttitor quis orci quam elit rutrum scelerisque nibh maximus, felis
        a integer maximus praesent. Metus varius, at sem dui vivamus elementum luctus nisl sit amet dolor sit amet,
        mauris et iaculis nec fermentum. Augue sapien, nisl vel purus nullam odio morbi a fusce vitae mattis vitae,
        posuere tristique bibendum aliquam. In donec dolor ut, imperdiet quam fermentum molestie vulputate scelerisque
        ac nec, tortor mi orci sollicitudin elementum.
      </p>
      <Collapse isOpen={isOpen}>
        Aliquam varius, consequat posuere a lacinia mauris eu tellus condimentum ut id ante, accumsan vehicula nulla
        neque. Mauris mi orci, in donec nullam odio leo sapien et vehicula nunc a lacinia, fermentum arcu ullamcorper
        posuere. Mauris euismod, ac nec ante fermentum praesent nisi commodo neque placerat, vivamus dui et tempus
        pulvinar suspendisse. Porttitor eget, sollicitudin hendrerit bibendum nulla aliquam sit amet leo vitae, eget
        consectetur diam a vestibulum. Adipiscing lorem ipsum, arcu condimentum posuere semper morbi condimentum dui,
        bibendum nunc aenean facilisis. Phasellus euismod, donec sem odio ligula praesent finibus nibh convallis,
        tristique aliquam sed id tortor sem lobortis.
      </Collapse>
      <div className="mb-400">
        <Button isOpen={isOpen} onClick={toggleHandler} aria-expanded={isOpen}>
          <span className="accessibility-open">Show less</span>
          <span className="accessibility-closed">Show more</span>
        </Button>{' '}
        &nbsp;{' '}
        <a href="#" role="button" onClick={toggleHandler} aria-expanded={isOpen}>
          <span className="accessibility-open">Show less</span>
          <span className="accessibility-closed">Show more</span>
        </a>
      </div>
    </>
  );
};

export default CollapseHelperClass;
