import { Column, Heading, Text, Button } from "@/once-ui/components";

export default function NotFound() {
  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        Page Not Found
      </Heading>
      <Text onBackground="neutral-weak"></Text>
      <Button href="/documents/CV_special.jpg" variant="tertiary" weight="default" size="s">
      The page you are looking for does not exist.
      </Button>
    </Column>
    
  );
}
