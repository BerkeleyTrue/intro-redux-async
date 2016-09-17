import React from 'react';
import dedent from 'dedent';
import {
  Deck,
  Heading,
  Link,
  List,
  ListItem,
  Slide,
  Spectacle,
  Text
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import CodeSlide from 'spectacle-code-slide';
import createTheme from 'spectacle/lib/themes/default';
/* eslint-disable import/named */
import { user, title, repoName } from '../slide-info';
/* eslint-enable import/named */

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {};
const reactBlue = '#00d8ff';
const theme = createTheme({
  primary: '#222',
  secondary: reactBlue,
  tertiary: 'white',
  quartenary: reactBlue
});

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck
          transition={['zoom', 'slide']}
          transitionDuration={ 500 }
          >
          <Slide
            bgColor='primary'
            transition={['zoom']}
            >
            <Heading
              caps={ true }
              fit={ true }
              lineHeight={ 1 }
              size={ 1 }
              >
              { title }
            </Heading>
          </Slide>
          <Slide
            bgColor='secondary'
            >
            <Link
              href={ `https://github.com/${ user }/${ repoName }` }
              target='_blank'
              >
              <Text
                bold={ true }
                caps={ true }
                >
                View on Github:
              </Text>
              <Heading
                caps={ true }
                fit={ true }
                size={ 1 }
                >
                { user }/{ repoName }
              </Heading>
            </Link>
          </Slide>
          <Slide>
            <Heading>
              The hard problems
            </Heading>
            <Heading
              size={ 2 }
              >
              Redux is Sync
            </Heading>
            <Text>
              Redux is syncronous
            </Text>
            <List>
              <ListItem>
                Action creators
              </ListItem>
              <ListItem>
                calls to dispatch
              </ListItem>
              <ListItem>
                reducer state updates
              </ListItem>
              <ListItem>
                store calls listeners
              </ListItem>
              <ListItem>
                connected components setState
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading>
              Where do I API?
            </Heading>
            <List>
              <ListItem>
                Where should ajax request live?
              </ListItem>
              <ListItem>
                What about handling promises?
              </ListItem>
              <ListItem>
                Components should be plain presenters
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading>
              Events and Async
            </Heading>
            <List>
              <ListItem>
                The start
              </ListItem>
              <ListItem>
                The completion
              </ListItem>
              <ListItem>
                The error
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Text
              textColor='secondary'
              >
              We need to turn our API calls into three dispatches.
            </Text>
            <Text
              textColor='secondary'
              >
              Dispatch our start action before doing the fetch.
            </Text>
            <Text
              textColor='secondary'
              >
              Dispatch our error action fetch errors.
            </Text>
            <Text
              textColor='secondary'
              >
              dispatch our completed action if all goes well.
            </Text>
          </Slide>
          <CodeSlide
            code={ require('raw!../assets/callback.example')}
            lang='jsx'
            ranges={[
              { loc: [ 0, 255 ], title: '' },
              { loc: [ 0, 5] },
              { loc: [ 1, 2 ] },
              { loc: [ 2, 3 ] },
              { loc: [ 3, 4 ] },
              { loc: [ 9, 16 ] },
              { loc: [ 19, 31 ] },
              { loc: [ 34, 39 ] }
            ]}
            transition={ [] }
          />
          <Slide>
            <Link
              href='https://github.com/gaearon/redux-thunk'
              target='_blank'
              >
              <Heading
                size={ 3 }
                textColor='secondary'
                >
                In comes Redux-thunk
              </Heading>
            </Link>
          </Slide>
          <Slide>
            <Heading>
              Remember the dispatch function?
            </Heading>
            <List>
              <ListItem>
                Takes an action object
              </ListItem>
              <ListItem>
                starts the reducer process in the store
              </ListItem>
            </List>
          </Slide>
          <CodeSlide
            code={dedent`
              store.dispatch({ type: 'MUCH_ACTION' });
            `}
            lang='jsx'
            ranges={[
              { loc: [ 0, 255 ], title: 'plain dispatch' }
            ]}
            transition={ [] }
          />
          <Slide>
            <Heading>
              Let's provide our own dispatch!
            </Heading>
            <List>
              <ListItem>
                Change dispatch to except action objects and functions
              </ListItem>
              <ListItem>
                When a function call that function with the old dispatch
              </ListItem>
            </List>
          </Slide>
          <CodeSlide
            code={ require('raw!../assets/thunk.example') }
            lang='jsx'
            ranges={[
              { loc: [ 0, 255 ], title: 'Thunk it!'},
              { loc: [ 0, 11] },
              { loc: [ 1, 2 ] },
              { loc: [ 2, 3 ] },
              { loc: [ 3, 4 ] },
              { loc: [ 4, 7 ] },
              { loc: [ 7, 11 ] },
              { loc: [ 13, 29 ] },
              { loc: [ 16, 27 ] }
            ]}
            transition={ [] }
          />
          <Slide>
            <Heading>
              Wait, what is a thunk?
            </Heading>
            <Heading
              size={ 3 }
              textColor='secondary'
              >
              A fancy name for a function that returns a function
            </Heading>
          </Slide>
          <Slide>
            <Heading>
              So how do we make dispatch accept functions?
            </Heading>
            <Heading
              size={ 3 }
              textColor='secondary'
              >
              Middleware!
            </Heading>
            <Text
              textColor='secondary'
              >
              and the applyMiddleware function combined with the
              createStore function
            </Text>
          </Slide>
          <Slide>
            <Heading
              textColor='secondary'
              textSize={ 60 }
              >
              Questions?
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
