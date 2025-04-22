// import { useState, useEffect } from "react";
// import { supabase } from "@/lib/supabase";
import Auth from "@/components/Auth";
import Account from "@/components/Account";
import { SafeAreaView, View } from "react-native";
// import { Session } from "@supabase/supabase-js";
// import Avatar from "@/components/Avatar";
import { useAuth } from "@/app/_layout";

export default function App() {
  // const [session, setSession] = useState<Session | null>(null);
  const session = useAuth((state: any) => state.session);

  /**
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
*/
  return (
    <SafeAreaView>
      <View className="w-full">
        {/* <View className="flex items-center w-full justify-center">
          <Avatar
            size={200}
            url={
              "https://i.postimg.cc/YjKJNwPr/2b2ce726c43df65a5ae769d12ce9b53.png"
            }
            onUpload={(url: string) => {
              // setAvatarUrl(url);
              // updateProfile({ username, website, avatar_url: url });
            }}
          />
        </View> */}
        {session && session.user ? (
          <Account key={session.user.id} session={session} />
        ) : (
          <Auth />
        )}
      </View>
    </SafeAreaView>
  );
}
