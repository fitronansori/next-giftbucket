import { Card, CardContent } from "@/components/ui/card";

import { TContactInfo } from "@/constants/data";

interface ContactCardProps {
  contact_item: TContactInfo;
}

const ContactCard = ({ contact_item }: ContactCardProps) => {
  return (
    <Card>
      <CardContent>
        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
            <contact_item.icon className="text-primary h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="mb-1 font-semibold">{contact_item.title}</h3>
            <p className="text-muted-foreground mb-1 text-sm">
              {contact_item.content}
            </p>
            <p className="text-muted-foreground text-xs">
              {contact_item.sub_content}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
