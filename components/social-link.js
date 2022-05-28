import { Link } from "@chakra-ui/react";

export default function SocialLink({ Icon, href }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Icon size="30" color="#FF8C8C" />
    </Link>
  );
}
