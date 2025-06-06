"use client";

import { useState } from "react";

import { MessageSquareIcon, SendIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import Title from "@/components/common/Title";

import { contact_info } from "@/constants/data";

import BusinessHoursCard from "./BusinessHoursCard";
import ContactCard from "./ContactCard";

interface ContactFormData {
  full_name: string;
  email_address: string;
  phone_number: string;
  subject_message: string;
  message_content: string;
}

const Contact = () => {
  const [form_data, setFormData] = useState<ContactFormData>({
    full_name: "",
    email_address: "",
    phone_number: "",
    subject_message: "",
    message_content: "",
  });

  const [is_submitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Log form data to console
    console.log("Contact Form Submitted:", form_data);

    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        full_name: "",
        email_address: "",
        phone_number: "",
        subject_message: "",
        message_content: "",
      });
    }, 3000);
  };

  return (
    <section className="py-10 lg:py-14">
      <div className="container space-y-8">
        <div className="">
          <Badge variant="outline" className="mx-auto mb-4 flex w-fit">
            <MessageSquareIcon className="h-4 w-4" />
            Hubungi Kami
          </Badge>

          <Title
            title="Mari Berkreasi Bersama"
            subtitle="Punya ide gift bucket yang unik? Atau ingin konsultasi untuk momen spesial Anda?"
          />
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
                <CardDescription>
                  Isi formulir di bawah ini dan kami akan segera menghubungi
                  Anda kembali.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="full_name">Nama Lengkap *</Label>
                      <Input
                        id="full_name"
                        name="full_name"
                        type="text"
                        placeholder="Masukkan nama lengkap"
                        value={form_data.full_name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone_number">Nomor Telepon *</Label>
                      <Input
                        id="phone_number"
                        name="phone_number"
                        type="tel"
                        placeholder="08XX-XXXX-XXXX"
                        value={form_data.phone_number}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email_address">Email Address *</Label>
                    <Input
                      id="email_address"
                      name="email_address"
                      type="email"
                      placeholder="contoh@email.com"
                      value={form_data.email_address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject_message">Subject *</Label>
                    <Input
                      id="subject_message"
                      name="subject_message"
                      type="text"
                      placeholder="Topik pesan Anda"
                      value={form_data.subject_message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message_content">Pesan *</Label>
                    <Textarea
                      id="message_content"
                      name="message_content"
                      rows={5}
                      className="min-h-[120px] resize-none"
                      placeholder="Ceritakan kepada kami tentang kebutuhan gift bucket Anda..."
                      value={form_data.message_content}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={is_submitting}
                  >
                    {is_submitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <SendIcon className="mr-2 h-4 w-4" />
                        Kirim Pesan
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-between gap-4">
            {/* Contact Details */}
            <div className="flex flex-col justify-between gap-4">
              {contact_info.map((item, index) => (
                <ContactCard key={index} contact_item={item} />
              ))}
            </div>

            {/* Business Hours */}
            <BusinessHoursCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
