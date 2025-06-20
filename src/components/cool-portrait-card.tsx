"use client";
import { CardBody, CardContainer, CardItem } from "./ui/3d-cards";

export default function CoolPortraitCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <CardContainer className={className}>
      <CardBody>
        <CardItem translateZ="50">{children}</CardItem>
      </CardBody>
    </CardContainer>
  );
}
