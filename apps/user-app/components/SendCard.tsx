"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/text-input";
import { useState } from "react";
import { P2Ptransfer } from "../app/lib/actions/createP2PTransfer";
import { useRouter } from "next/navigation";

export function SendCard() {
    const router = useRouter();
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");
    return(
        <Center>
            <Card ClassName="bg-[#231b28] w-[90%] " title="Send">
                <div className="min-w-72 pt-2">
                    <TextInput placeholder={"Number"} label="Number" onChange={(value) => {
                        setNumber(value)
                    }} value={number} />
                    <TextInput placeholder={"Amount"} label="Amount" onChange={(value) => {
                        setAmount(value)
                    }} value={amount} />
                    <div className="pt-4 flex justify-center">
                        <Button  className={"text-white border w-[200px] hover:bg-[#13d8aa] hover:text-black"}
                            onClick={async () => {
                                await P2Ptransfer(number, Number(amount)*100)
                                router.refresh()
                            }}>
                            Send
                        </Button>
                    </div>
                </div>
            </Card>
        </Center>
    )
}