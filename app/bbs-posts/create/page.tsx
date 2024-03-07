"use client";

import { postBBS } from "@/app/actions/postBBSAction";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "ユーザー名は2文字以上入力してください" }),
  title: z.string().min(3, { message: "タイトルは3文字以上入力してください" }),
  content: z
    .string()
    .min(10, { message: "本文は10文字以上入力してください" })
    .max(140, { message: "本文は140文字以内に収めてください" }),
});

const CreateBBSPage = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      title: "",
      content: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    const { username, title, content } = value;
    // try {
    //   await fetch("http://localhost:3000/api/post", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ username, title, content }),
    //   });

    //   router.push("/");
    //   router.refresh();
    // } catch (error) {
    //   console.log("error: ", error);
    // }

    // postBBS({ username, title, content });
    try {
      await postBBS({ username, title, content });

      //   router.push("/");
      //   router.refresh();
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div className="p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ユーザー名</FormLabel>
                <FormControl>
                  <Input placeholder="ユーザー名" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>タイトル</FormLabel>
                <FormControl>
                  <Input placeholder="タイトル" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>本文</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="投稿内容"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateBBSPage;
