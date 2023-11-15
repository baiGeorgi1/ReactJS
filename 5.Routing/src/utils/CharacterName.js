export default function Normalize(name) {
  return name.replace(/ /g, "-").toLowerCase();
}
