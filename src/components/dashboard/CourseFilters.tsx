
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CourseFilters = () => {
  const { t, language } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Select defaultValue="all">
        <SelectTrigger className="w-32 bg-slate-800/50 border-slate-600 text-white text-xs">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">{t('courseFilters.allDifficulty')}</SelectItem>
          <SelectItem value="g1-5">{t('courseFilters.g1to5')}</SelectItem>
          <SelectItem value="g6-8">{t('courseFilters.g6to8')}</SelectItem>
          <SelectItem value="g9-12">{t('courseFilters.g9to12')}</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all-subject">
        <SelectTrigger className="w-32 bg-slate-800/50 border-slate-600 text-white text-xs">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-subject">{t('courseFilters.allSubject')}</SelectItem>
          <SelectItem value="english">{t('courseFilters.english')}</SelectItem>
          <SelectItem value="math">{t('courseFilters.math')}</SelectItem>
          <SelectItem value="science">{t('courseFilters.science')}</SelectItem>
          <SelectItem value="economics">{t('courseFilters.economics')}</SelectItem>
          <SelectItem value="humanities">{t('courseFilters.humanities')}</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all-time">
        <SelectTrigger className="w-32 bg-slate-800/50 border-slate-600 text-white text-xs">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-time">{t('courseFilters.allTime')}</SelectItem>
          <SelectItem value="morning">{t('courseFilters.morning')}</SelectItem>
          <SelectItem value="afternoon">{t('courseFilters.afternoon')}</SelectItem>
          <SelectItem value="evening">{t('courseFilters.evening')}</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all-language">
        <SelectTrigger className="w-24 bg-slate-800/50 border-slate-600 text-white text-xs">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-language">{t('courseFilters.allLanguage')}</SelectItem>
          <SelectItem value="english">{t('courseFilters.english')}</SelectItem>
          <SelectItem value="chinese">{t('courseFilters.chinese')}</SelectItem>
          <SelectItem value="french">{t('courseFilters.french')}</SelectItem>
          <SelectItem value="german">{t('courseFilters.german')}</SelectItem>
          <SelectItem value="spanish">{t('courseFilters.spanish')}</SelectItem>
          <SelectItem value="italian">{t('courseFilters.italian')}</SelectItem>
          <SelectItem value="japanese">{t('courseFilters.japanese')}</SelectItem>
          <SelectItem value="korean">{t('courseFilters.korean')}</SelectItem>
        </SelectContent>
      </Select>
      <div className="flex items-center space-x-2 ml-4">
        <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 p-2">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 p-2">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CourseFilters;
