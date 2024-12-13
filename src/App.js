import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  View,
  Card,
} from "@aws-amplify/ui-react";

import {
  NavBarHeader2 
 } from './ui-components';

 import {
  ItemCardCollection 
 } from './ui-components';

 import {
  BlogCreateForm 
 } from './ui-components';

 import {
  PostCreateForm 
 } from './ui-components';


function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Heading level={1}>HARCO - Gestão de Condomínios</Heading>
        <NavBarHeader2/>
        <Heading level={2}>Condomínios</Heading>
        <BlogCreateForm/>
        <Heading level={2}>Estrutura</Heading>
        <PostCreateForm/>
        <ItemCardCollection/>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
