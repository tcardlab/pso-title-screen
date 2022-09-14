export default function useCount () {
  const count = $ref(0)
  return $$(count)
}
