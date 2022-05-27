export default function SocialLink({ Icon, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon size="30" color="#FF8C8C" />
    </a>
  );
}
