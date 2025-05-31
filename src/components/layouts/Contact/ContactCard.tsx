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
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <contact_item.icon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-1">{contact_item.title}</h3>
            <p className="text-sm text-muted-foreground mb-1">
              {contact_item.content}
            </p>
            <p className="text-xs text-muted-foreground">
              {contact_item.sub_content}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
