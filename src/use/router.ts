/*
  Just a route helper to reduce boilerplate
*/
import { useRoute, useRouter } from 'vue-router';
export default function () {
  const [route, router] = [useRoute(), useRouter()]
  function to(dest:string) { router.push(dest) }
  return { to, route, router }
}
