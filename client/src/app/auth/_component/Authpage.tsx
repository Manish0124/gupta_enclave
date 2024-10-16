'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from '@iconify/react';
import { LuEye, LuEyeOff } from "react-icons/lu"
import { useRouter } from "next/navigation"


interface AuthProps {
  isForLogin: boolean,
  title:string;
}

export default function AuthPage({isForLogin = true , title = ''}:AuthProps) {
  const [email, setEmail] = useState("")
  const [isPassword, setisPassword] = useState(true);
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const Router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }
    // Here you would typically handle the login logic
    console.log("Login attempted with:", email, password)
    setError("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex flex-col items-center justify-center p-4 " >
            <video
        autoPlay
        muted
        // loop
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/video/housevideo.png.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
          <Icon icon="lucide:home" width={25} height={25} />
            <CardTitle className="text-2xl font-bold ml-2">Gupta Enclave </CardTitle>
          </div>
          <h2 className="font-semibold capitalize text-sm opacity-95  " >Login to gupta enclave</h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  startContent={<Icon icon="eva:email-outline" height={18} width={18} opacity={0.7} />}
                  id="email" 
                  type="email" 
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  value={password}
                  startContent={<Icon icon="material-symbols:key" height={18} width={18} opacity={0.7} />}
                  endContent={
                    <div className="cursor-pointer opa70 " onClick={()=> setisPassword(!isPassword)} >
                      {!isPassword ? <LuEyeOff /> : <LuEye />}
                      </div>
                  }
                  type={isPassword ? 'password' : 'text'}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && (
                <div className="text-red-500 text-sm flex items-center">
                  {/* <AlertCircle className="h-4 w-4 mr-2" /> */}
                  {error}
                </div>
              )}
              <Button  type="submit" className="w-full">Log in</Button>
            </div>
          </form>
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3 ">
            <Icon icon="flat-color-icons:google" height={24} width={24} style={{cursor:'pointer'}} />
            <Icon icon="logos:facebook" height={24} width={24} style={{cursor:'pointer'}} />
            <Icon icon="file-icons:apple" height={24} width={24} style={{cursor:'pointer'}} />
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-gray-600 mt-2 w-full">
            Don't have an account?{" "}
            <a className="text-blue-600 hover:underline"   >
              Sign up
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}