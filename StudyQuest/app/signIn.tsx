import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from '../src/lib/supabase'
import Auth from '../src/components/Auth'
// import Account from '../src/components/Account'
import { View, Text } from 'react-native'
import { Session } from '@supabase/supabase-js'

export default function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View>
      <Auth />
      {session && session.user && <Text>{session.user.id}</Text>}
    </View>
  )
}

// import {Text, View, StyleSheet} from 'react-native';

// export default function SignInScreen() {
//     return (
//         <View style={signInStyle.container}>
//             <Text style={signInStyle.text}>This is a test</Text>
//         </View>
//     )
// }

// const signInStyle = StyleSheet.create( {
//     container: {
//         flex: 1,
//         backgroundColor: 'grey',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     text: {
//         color: 'red',
//         fontFamily: 'Pixel-Game',
//         fontSize: '8rem',
//     },
// });