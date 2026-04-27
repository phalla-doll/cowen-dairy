import Image from 'next/image';
import { Search, ArrowRight, Lock, ChevronLeft, ChevronRight, Star, CheckCircle2, Beef, Leaf, Droplets, Sun } from 'lucide-react';
import * as motion from 'motion/react-client';

export default function Home() {
  return (
    <main className="min-h-screen bg-cowen-cream selection:bg-cowen-orange selection:text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 lg:px-12">
        <div className="flex items-center gap-2">
          <Beef className="w-8 h-8 text-cowen-orange" />
          <span className="font-display font-bold text-2xl tracking-tighter text-cowen-brown">COWEN</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-cowen-brown">
          <a href="#" className="hover:text-cowen-orange transition-colors">FARM</a>
          <a href="#" className="hover:text-cowen-orange transition-colors">DAIRY</a>
          <a href="#" className="hover:text-cowen-orange transition-colors">PRODUCTS</a>
          <a href="#" className="hover:text-cowen-orange transition-colors">ABOUT</a>
        </div>

        <div className="flex items-center gap-4 text-cowen-brown">
          <button className="hidden sm:flex items-center gap-2 text-sm font-medium hover:text-cowen-orange transition-colors uppercase tracking-wider">
            <Search className="w-4 h-4" /> FIND US
          </button>
          <button className="bg-cowen-orange text-white px-5 py-2.5 rounded-full text-sm font-bold tracking-wide flex items-center gap-2 hover:bg-orange-600 transition-colors uppercase">
            ENJOY DAIRY <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[70vh] min-h-[600px]">
          {/* Left Hero */}
          <div className="bg-cowen-green rounded-[2rem] p-8 lg:p-16 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cowen-lightgreen/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] font-bold text-white mb-8 tracking-tight z-10 uppercase"
            >
              COWS THAT CARE<br/>FOR THE FUTURE
            </motion.h1>
            
            <div className="z-10">
              <button className="bg-cowen-orange text-white px-6 py-3 rounded-full text-sm font-bold tracking-wide flex items-center gap-2 hover:scale-105 transition-transform mb-16 inline-flex uppercase">
                A BETTER WAY <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-white/80 max-w-sm text-sm z-10 font-medium"
            >
              Cows that care for the future represent a shift toward more sustainable and ethical farming practices.
            </motion.p>
          </div>

          {/* Right Hero Image */}
          <div className="rounded-[2rem] overflow-hidden relative group">
            <Image 
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
              alt="Brown and white cow grazing"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-4 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="font-rounded text-4xl md:text-6xl font-extrabold mb-16 text-cowen-brown uppercase tracking-tight">
          SAVOR THE NATURAL GOODNESS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-[#facc15] rounded-[2.5rem] p-8 relative flex flex-col items-center group overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}></div>
            
            <div className="flex justify-between w-full mb-12 z-10">
              <h3 className="font-display font-bold text-2xl text-white drop-shadow-md">COCOA VELVET</h3>
              <span className="bg-white/90 text-xs font-bold px-3 py-1 rounded-full text-yellow-800">-10%</span>
            </div>
            
            <div className="h-72 w-36 relative mb-12 z-10 transition-transform group-hover:scale-105">
               <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-[2rem] border-4 border-white/50 flex items-center justify-center shadow-xl">
                  <div className="text-center">
                     <p className="font-display font-bold text-sm text-cowen-brown">MILK</p>
                     <p className="text-[10px] font-medium text-cowen-brown/80">COCOA VELVET</p>
                  </div>
               </div>
            </div>

            <div className="flex justify-between w-full items-center mt-auto z-10">
              <button className="bg-white text-cowen-orange px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-orange-50 transition-colors shadow-sm uppercase tracking-wide">
                ADD TO CART <Lock className="w-3 h-3" />
              </button>
              <div className="flex items-center gap-2">
                 <span className="text-black/40 line-through font-medium text-sm">$50</span>
                 <span className="font-display font-bold text-2xl text-white drop-shadow-sm">$45</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-[#0f766e] rounded-[2.5rem] p-8 relative flex flex-col items-center group overflow-hidden"
          >
             <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
            
            <div className="flex justify-between w-full mb-12 z-10">
              <h3 className="font-display font-bold text-2xl text-white drop-shadow-md">STRAWBERRY BLISS</h3>
              <span className="bg-white/90 text-xs font-bold px-3 py-1 rounded-full text-teal-800">-10%</span>
            </div>
            
            <div className="h-72 w-36 relative mb-12 z-10 transition-transform group-hover:scale-105">
               <div className="absolute inset-0 bg-rose-400/80 backdrop-blur-md rounded-[2rem] border-4 border-white/50 flex items-center justify-center shadow-xl">
                  <div className="text-center">
                     <p className="font-display font-bold text-sm text-white">MILK</p>
                     <p className="text-[10px] font-medium text-white/90">STRAWBERRY<br/>BLISS</p>
                  </div>
               </div>
            </div>

            <div className="flex justify-between w-full items-center mt-auto z-10">
              <button className="bg-white text-teal-700 px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-teal-50 transition-colors shadow-sm uppercase tracking-wide">
                ADD TO CART <Lock className="w-3 h-3" />
              </button>
              <div className="flex items-center gap-2">
                 <span className="text-white/40 line-through font-medium text-sm">$30</span>
                 <span className="font-display font-bold text-2xl text-white drop-shadow-sm">$27</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-cowen-orange rounded-[2.5rem] p-8 relative flex flex-col items-center group overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 20px, #000 20px, #000 22px), repeating-linear-gradient(90deg, transparent, transparent 20px, #000 20px, #000 22px)' }}></div>
            
            <div className="flex justify-between w-full mb-12 z-10">
              <h3 className="font-display font-bold text-2xl text-white drop-shadow-md">GOLDEN HONEY</h3>
              <span className="bg-white/90 text-xs font-bold px-3 py-1 rounded-full text-orange-600">-10%</span>
            </div>
            
            <div className="h-72 w-36 relative mb-12 z-10 transition-transform group-hover:scale-105">
               <div className="absolute inset-0 bg-amber-200/90 backdrop-blur-md rounded-[2rem] border-4 border-white/50 flex items-center justify-center shadow-xl">
                  <div className="text-center">
                     <p className="font-display font-bold text-sm text-orange-800">MILK</p>
                     <p className="text-[10px] font-medium text-orange-700/80">GOLDEN HONEY</p>
                  </div>
               </div>
            </div>

            <div className="flex justify-between w-full items-center mt-auto z-10">
              <button className="bg-white text-cowen-orange px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-orange-50 transition-colors shadow-sm uppercase tracking-wide">
                ADD TO CART <Lock className="w-3 h-3" />
              </button>
              <div className="flex items-center gap-2">
                 <span className="text-white/50 line-through font-medium text-sm">$40</span>
                 <span className="font-display font-bold text-2xl text-white drop-shadow-sm">$36</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-cowen-green text-white py-4 overflow-hidden relative flex">
        <div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite] font-display font-bold text-xl tracking-widest items-center">
          <span className="mx-8">✨ BEST DAIRY</span>
          <span className="mx-8 flex items-center"><Beef className="w-5 h-5 mx-2 text-cowen-yellow" /> FRESHLY GATHERED</span>
          <span className="mx-8 flex items-center"><Beef className="w-5 h-5 mx-2 text-cowen-yellow" /> GENTLY CRAFTED</span>
          <span className="mx-8 flex items-center"><Beef className="w-5 h-5 mx-2 text-cowen-yellow" /> PASTURE PURE</span>
          <span className="mx-8 flex items-center"><Beef className="w-5 h-5 mx-2 text-cowen-yellow" /> MEADOW RAISED</span>
          <span className="mx-8">✨ BEST DAIRY</span>
          <span className="mx-8 flex items-center"><Beef className="w-5 h-5 mx-2 text-cowen-yellow" /> FRESHLY GATHERED</span>
          <span className="mx-8 flex items-center"><Beef className="w-5 h-5 mx-2 text-cowen-yellow" /> GENTLY CRAFTED</span>
          <span className="mx-8 flex items-center"><Beef className="w-5 h-5 mx-2 text-cowen-yellow" /> PASTURE PURE</span>
        </div>
      </div>

      {/* History & Sustainability Section */}
      <section className="py-24 px-4 lg:px-8 bg-cowen-green text-cowen-cream relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-radial-gradient(circle at 0 0, transparent 0, #ffffff 10px), repeating-linear-gradient(#084C24, #084C24)' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-rounded text-4xl md:text-5xl lg:text-6xl font-bold mb-6 uppercase tracking-tight text-cowen-yellow">
              Nurturing the Land, <br className="hidden md:block" /> Sustaining the Future
            </h2>
            <p className="max-w-2xl mx-auto text-cowen-cream/80 text-lg font-medium leading-relaxed">
              For over three generations, we have lived by a simple rule: if you take care of the land, the land will take care of you. Our legacy is built on sustainable farming.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* History Column */}
            <div className="space-y-8">
              <div className="relative h-80 md:h-[400px] w-full rounded-[2.5rem] overflow-hidden border border-white/20 shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=2070&auto=format&fit=crop"
                  alt="Lush green farm field"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-cowen-brown/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 uppercase tracking-widest text-xs font-bold text-cowen-yellow">
                  Our Origins - Est. 1948
                </div>
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold mb-4 uppercase">Rooted in Tradition</h3>
                <p className="text-cowen-cream/80 leading-relaxed font-medium">
                  What began as a modest herd of 20 cows in 1948 has blossomed into a pioneering dairy operation. The Cowen family has lovingly worked these fields, passing down the invaluable knowledge that true quality cannot be rushed. We honor the old ways of farming while embracing modern ecological sciences to ensure our cows are happy and our soil remains rich for generations to come.
                </p>
              </div>
            </div>

            {/* Sustainability Column */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-3xl font-bold mb-8 uppercase text-cowen-yellow">The Eco-Promise</h3>
                <div className="space-y-6">
                  {/* Practice 1 */}
                  <div className="flex gap-4 group cursor-pointer hover:bg-white/5 p-4 rounded-3xl transition-colors">
                    <div className="w-14 h-14 shrink-0 bg-white/10 rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-cowen-yellow group-hover:text-cowen-brown transition-all">
                      <Leaf className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 uppercase tracking-wide">Regenerative Agriculture</h4>
                      <p className="text-sm text-cowen-cream/80 font-medium leading-relaxed">
                        We practice strict crop rotation and utilize natural, organic composting to maintain carbon-negative soil biology, restoring nutrients rather than depleting them.
                      </p>
                    </div>
                  </div>
                  {/* Practice 2 */}
                  <div className="flex gap-4 group cursor-pointer hover:bg-white/5 p-4 rounded-3xl transition-colors">
                    <div className="w-14 h-14 shrink-0 bg-white/10 rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-blue-400 group-hover:text-white transition-all">
                      <Droplets className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 uppercase tracking-wide">Water Conservation</h4>
                      <p className="text-sm text-cowen-cream/80 font-medium leading-relaxed">
                        Our advanced closed-loop filtration systems allow us to safely treat and recycle up to 80% of the water used across our dairy facilities.
                      </p>
                    </div>
                  </div>
                  {/* Practice 3 */}
                  <div className="flex gap-4 group cursor-pointer hover:bg-white/5 p-4 rounded-3xl transition-colors">
                    <div className="w-14 h-14 shrink-0 bg-white/10 rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-orange-400 group-hover:text-white transition-all">
                      <Sun className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 uppercase tracking-wide">Clean Energy Powered</h4>
                      <p className="text-sm text-cowen-cream/80 font-medium leading-relaxed">
                        With over 2,000 solar panels covering our barns, our daily processing operations run off 100% renewable solar and wind energy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative h-48 w-full rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop"
                  alt="Farm tractor in field"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ranch Life Revolution Section */}
      <section className="py-24 px-4 lg:px-8 bg-cowen-cream overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px] rounded-[2rem] overflow-hidden ml-[-4rem] lg:ml-[-8rem] hidden lg:block">
             <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cowen-cream/80 z-10" />
             <Image 
                src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=2070&auto=format&fit=crop"
                alt="Cow staring"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
             />
          </div>
          
          <div className="lg:pl-12">
            <h2 className="font-display text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-cowen-brown mb-6 leading-[1.1] uppercase">
              EXPERIENCE THE <br/> RANCH 🥩 LIFE <br/> REVOLUTION
            </h2>
            <p className="text-gray-600 mb-12 max-w-md font-medium text-lg leading-relaxed">
              Experience the Ranch Life Revolution with pure, sustainable milk crafted for better living.
            </p>
            
            <div className="flex gap-4 mb-12">
               <button className="w-12 h-12 rounded-full border border-cowen-brown/20 flex items-center justify-center hover:bg-cowen-brown hover:text-white transition-colors">
                  <ChevronLeft className="w-5 h-5" />
               </button>
               <button className="w-12 h-12 rounded-full border border-cowen-brown/20 flex items-center justify-center hover:bg-cowen-brown hover:text-white transition-colors">
                  <ChevronRight className="w-5 h-5" />
               </button>
            </div>

            <div className="grid grid-cols-2 gap-8">
               <div>
                  <div className="relative h-48 rounded-3xl overflow-hidden mb-4 shadow-lg border border-white/50">
                     <Image 
                        src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop"
                        alt="Calves"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                     />
                  </div>
                  <p className="font-bold text-xs uppercase tracking-wider text-cowen-brown flex justify-between items-center group cursor-pointer pr-2">
                     PRIDE IN EVERY PASTURE <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </p>
               </div>
               <div>
                  <div className="relative h-48 rounded-3xl overflow-hidden mb-4 shadow-lg border border-white/50">
                     <Image 
                        src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=2070&auto=format&fit=crop"
                        alt="Cow standing"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                     />
                  </div>
                  <p className="font-bold text-xs uppercase tracking-wider text-cowen-brown flex justify-between items-center group cursor-pointer pr-2">
                     PURE PASSION FOR DAIRY <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Harvesting Tradition Section */}
      <section className="bg-cowen-brown py-24 px-4 lg:px-8 relative overflow-hidden">
         {/* Decorative SVG lines */}
         <svg className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100,-100 Q 500,200 1200,-100" stroke="white" strokeWidth="2" fill="none" />
            <path d="M-100,500 Q 500,100 1200,600" stroke="white" strokeWidth="2" fill="none" />
         </svg>
         
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
               <h2 className="font-display text-5xl md:text-7xl lg:text-[5rem] font-bold text-cowen-yellow mb-4 uppercase leading-[0.9]">
                  HARVESTING <br/> TRADITION,
               </h2>
               <h2 className="font-display text-4xl md:text-6xl lg:text-[4.5rem] font-bold text-cowen-cream mb-8 uppercase leading-[0.9]">
                   CULTIVATING <br/> QUALITY
               </h2>
               <div className="max-w-sm mb-12">
                  <Beef className="w-8 h-8 text-cowen-orange mb-4" />
                  <p className="text-cowen-cream/80 text-sm font-medium leading-relaxed">
                     Rooted in tradition, we craft pure, nourishing milk with care, bringing natural goodness to every moment.
                  </p>
               </div>
            </div>

            <div className="relative h-[400px] flex items-center justify-center">
               {/* Avatars */}
               <div className="absolute top-0 right-0 lg:right-12 bg-white/10 backdrop-blur-md rounded-full p-2 flex items-center gap-3 pr-4 border border-white/20 z-20">
                  <div className="flex -space-x-3">
                     <div className="w-10 h-10 rounded-full bg-cowen-orange border-2 border-cowen-brown overflow-hidden relative shadow-lg">
                        <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" alt="User" fill className="object-cover" referrerPolicy="no-referrer" />
                     </div>
                     <div className="w-10 h-10 rounded-full bg-cowen-yellow border-2 border-cowen-brown overflow-hidden relative shadow-lg">
                        <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" alt="User" fill className="object-cover" referrerPolicy="no-referrer" />
                     </div>
                     <div className="w-10 h-10 rounded-full bg-cowen-lightgreen border-2 border-cowen-brown overflow-hidden relative shadow-lg">
                        <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" alt="User" fill className="object-cover" referrerPolicy="no-referrer" />
                     </div>
                  </div>
                  <p className="text-white text-xs font-medium leading-tight max-w-[120px]">
                     Pure milk crafted with care from trusted farms
                  </p>
               </div>

               {/* Stylized Milk Bottles Overlap */}
               <div className="flex gap-4 items-center justify-center rotate-[-5deg] scale-110">
                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-24 h-64 bg-yellow-900/40 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl relative flex flex-col items-center pt-8">
                     <div className="w-12 h-6 bg-white/20 rounded-full mb-4"></div>
                     <p className="font-display font-bold text-xs text-white/90 rotate-[-90deg] mt-16 whitespace-nowrap tracking-wider">COCOA VELVET</p>
                  </motion.div>
                  <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="w-28 h-72 bg-rose-500/80 backdrop-blur-xl border border-white/20 rounded-[2.5rem] shadow-2xl z-10 relative flex flex-col items-center pt-8 -mt-8">
                     <div className="w-14 h-8 bg-white/40 rounded-full mb-4 shadow-sm"></div>
                     <p className="font-display font-bold text-xl text-white mt-12 tracking-wide block">MILK</p>
                     <p className="text-[10px] text-white/95 font-bold text-center tracking-widest uppercase">STRAWBERRY<br/>BLISS</p>
                  </motion.div>
                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="w-24 h-64 bg-amber-400/80 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-2xl relative flex flex-col items-center pt-8">
                     <div className="w-12 h-6 bg-white/40 rounded-full mb-4 shadow-sm"></div>
                     <p className="font-display font-bold text-sm text-yellow-900 mt-12 drop-shadow-sm opacity-80 rotate-[-90deg] whitespace-nowrap tracking-widest mt-16">GOLDEN HONEY</p>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 lg:px-8 max-w-7xl mx-auto">
         <div className="flex justify-between items-end mb-16">
            <h2 className="font-rounded text-4xl md:text-5xl font-bold text-cowen-brown tracking-tight">
               OUR CUSTOMERS LOVE US
            </h2>
            <div className="flex gap-4">
               <button className="w-12 h-12 rounded-full border border-cowen-brown/20 flex items-center justify-center hover:bg-cowen-brown hover:text-white transition-colors">
                  <ChevronLeft className="w-5 h-5" />
               </button>
               <button className="w-12 h-12 rounded-full border border-cowen-brown/20 flex items-center justify-center hover:bg-cowen-brown hover:text-white transition-colors">
                  <ChevronRight className="w-5 h-5" />
               </button>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto lg:h-[350px]">
            {/* Review Card 1 */}
            <div className="bg-cowen-orange rounded-3xl p-8 flex flex-col items-start justify-between text-white group hover:-translate-y-2 transition-transform h-[350px]">
               <div>
                  <h3 className="font-bold text-sm mb-1 flex items-center gap-2 tracking-wide uppercase">EMILY CARTER <CheckCircle2 className="w-4 h-4 text-white/80" /></h3>
                  <p className="text-white/80 text-xs mb-6 font-medium">Food Blogger</p>
               </div>
               
               <div>
                  <div className="flex gap-1 mb-4">
                     {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="font-medium text-base leading-relaxed text-white/95">
                     &quot;Wonderfully fresh and smooth. You can genuinely taste the quality and care in every drop.&quot;
                  </p>
               </div>
            </div>

            {/* Image Card 1 */}
            <div className="rounded-3xl overflow-hidden relative group h-[350px] shadow-lg">
               <Image 
                  src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2000&auto=format&fit=crop"
                  alt="Raw steak"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
               />
            </div>

             {/* Review Card 2 */}
             <div className="bg-cowen-green rounded-3xl p-8 flex flex-col items-start justify-between text-white group hover:-translate-y-2 transition-transform h-[350px]">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full overflow-hidden relative shadow-md">
                     <Image src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=150&auto=format&fit=crop" alt="User" fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                     <h3 className="font-bold text-sm flex items-center gap-1 uppercase tracking-wide">DANIEL RODRIGUEZ <CheckCircle2 className="w-3 h-3 text-teal-400" /></h3>
                     <p className="text-white/70 text-xs font-medium">Restaurant Critic</p>
                  </div>
               </div>
               
               <div>
                  <div className="flex gap-1 mb-4 items-center">
                     <span className="font-bold mr-2 text-sm">4.8</span>
                     {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="font-medium text-base leading-relaxed text-white/90">
                     &quot;Wonderfully fresh and smooth, with a clean taste that feels genuinely premium.&quot;
                  </p>
               </div>
            </div>

            {/* Image Card 2 */}
            <div className="rounded-3xl overflow-hidden relative group h-[350px] shadow-lg">
               <Image 
                  src="https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?q=80&w=2062&auto=format&fit=crop"
                  alt="Picnic"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
               />
            </div>
         </div>
      </section>

      {/* Footer Banner Section */}
      <section className="py-24 px-4 bg-cowen-cream overflow-hidden relative border-t border-gray-200 mt-12 pb-32">
         <div className="absolute top-10 left-10 text-cowen-orange opacity-20">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C12 2 12 10 20 12C12 14 12 22 12 22C12 22 14 4 12C12 10 12 2 12 2Z" fill="currentColor"/></svg>
         </div>
         <div className="absolute bottom-10 right-1/4 text-cowen-green opacity-10">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C12 2 12 10 20 12C12 14 12 22 12 22C12 22 14 4 12C12 10 12 2 12 2Z" fill="currentColor"/></svg>
         </div>
         
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-16 relative z-10">
            <div className="max-w-sm">
               <Beef className="w-10 h-10 text-cowen-brown mb-6" />
               <p className="text-cowen-brown/70 font-medium text-sm leading-relaxed">
                  Rooted in tradition, we craft pure, nourishing milk with care, bringing natural goodness to every moment.
               </p>
            </div>
            
            <h2 className="font-display text-5xl md:text-6xl lg:text-[5rem] font-bold text-cowen-brown text-center lg:text-right uppercase leading-[0.9]">
               CRAFTED BY NATURE,<br/>CHERISHED BY YOU
            </h2>
         </div>
      </section>

      {/* Global CSS animation for Marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </main>
  );
}
