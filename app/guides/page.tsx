import { Suspense } from "react"
import GuidesGrid from "@/components/guides/GuidesGrid"
import GuidesFilters from "@/components/guides/GuidesFilters"
import TopGuidesSlider from "@/components/guides/TopGuidesSlider"
import { Skeleton } from "@/components/ui/skeleton"
import AddGuideButton from "@/components/guides/AddGuideButton"

export default function GuidesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Гайды по Hearts of Iron IV</h1>
      <div className="flex justify-end mb-4">
        <AddGuideButton />
      </div>
      <Suspense fallback={<Skeleton className="w-full h-64" />}>
        <TopGuidesSlider />
      </Suspense>
      <div className="flex flex-col md:flex-row gap-8 mt-12">
        <aside className="w-full md:w-1/4">
          <GuidesFilters />
        </aside>
        <main className="w-full md:w-3/4">
          <Suspense fallback={<Skeleton className="w-full h-96" />}>
            <GuidesGrid />
          </Suspense>
        </main>
      </div>
    </div>
  )
}

