import React from 'react';
import { ButtonLink } from '../../ButtonLink';
import { Flex } from '../../Flex';
import { Grid } from '../../Grid';
import { Icon } from '../../Icon';
import { Link } from '../../Link';
import { Text } from '../../Text';
import { UNSTABLE_Avatar } from '../../UNSTABLE_Avatar';
import { VisuallyHidden } from '../../VisuallyHidden';
import Card from '../Card';
import CardBody from '../CardBody';
import CardEyebrow from '../CardEyebrow';
import CardFooter from '../CardFooter';
import CardLink from '../CardLink';
import CardTitle from '../CardTitle';

const CardFooterContent = () => {
  return (
    <Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }}>
      <Card isBoxed>
        <CardBody>
          <CardEyebrow>Footer content</CardEyebrow>
          <CardTitle isHeading>
            <CardLink href="#">Links</CardLink>
          </CardTitle>
          {/* User content */}
          <p>Lorem ipsum dolor sit amet.</p>
          {/* End user content */}
        </CardBody>
        <CardFooter>
          <Link href="#link" color="primary">
            Primary
          </Link>
          <Link href="#link" color="secondary">
            Secondary
          </Link>
        </CardFooter>
      </Card>

      <Card isBoxed>
        <CardBody>
          <CardEyebrow>Footer content</CardEyebrow>
          <CardTitle isHeading>
            <CardLink href="#">Icon buttons</CardLink>
          </CardTitle>
          {/* User content */}
          <p>Lorem ipsum dolor sit amet.</p>
          {/* End user content */}
        </CardBody>
        <CardFooter>
          <ButtonLink href="#" color="plain" isSymmetrical>
            <VisuallyHidden>Add</VisuallyHidden>
            <Icon name="add" />
          </ButtonLink>
          <ButtonLink href="#" color="plain" isSymmetrical>
            <VisuallyHidden>Edit</VisuallyHidden>
            <Icon name="edit" />
          </ButtonLink>
          <ButtonLink href="#" color="plain" isSymmetrical>
            <VisuallyHidden>Help</VisuallyHidden>
            <Icon name="help" />
          </ButtonLink>
        </CardFooter>
      </Card>

      <Card isBoxed>
        <CardBody>
          <CardEyebrow>Footer content</CardEyebrow>
          <CardTitle isHeading>
            <CardLink href="#jiri-barta">Custom footer</CardLink>
          </CardTitle>
          {/* User content */}
          <p>Lorem ipsum dolor sit amet.</p>
          {/* End user content */}
        </CardBody>
        <CardFooter>
          <Flex>
            <UNSTABLE_Avatar size="large">
              <img
                src="https://media.licdn.com/dms/image/v2/C4D03AQG7vmijKairYA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1620064696692?e=1737590400&v=beta&t=r0jUkDJnh8reIhDzUaMsofW__vgNhLlydEiK8K5RMYU"
                alt=""
              />
            </UNSTABLE_Avatar>
            <div>
              <Text elementType="div" size="small" color="primary" emphasis="semibold">
                Jiří Bárta
              </Text>
              <Text elementType="div" size="small" color="secondary">
                Senior UI Designer
              </Text>
            </div>
          </Flex>
        </CardFooter>
      </Card>
    </Grid>
  );
};

export default CardFooterContent;
