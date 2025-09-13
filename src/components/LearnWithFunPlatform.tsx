import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Users, BookOpen, FileText, BarChart3, Trophy, Home } from "lucide-react";
import { Dashboard } from "./Dashboard";
import { DocumentsTab } from "./DocumentsTab";
import { AssessmentsTab } from "./AssessmentsTab";
import { AnalyticsTab } from "./AnalyticsTab";
import { AchievementsTab } from "./AchievementsTab";

const LearnWithFunPlatform = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const userAvatar = '🚀';

  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'documents', icon: FileText, label: 'Documents' },
    { id: 'assessments', icon: BookOpen, label: 'Assessments' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'achievements', icon: Trophy, label: 'Achievements' },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 bg-sidebar border-r border-sidebar-border">
        <div className="p-6">
          <h1 className="text-2xl font-bold bg-gradient-rainbow bg-clip-text text-transparent">
            LearnFun
          </h1>
        </div>
        <nav className="mt-8 space-y-2 px-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "secondary" : "ghost"}
                className={`w-full justify-start text-left ${
                  activeTab === item.id 
                    ? "bg-gradient-rainbow text-white shadow-lg" 
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.label}
              </Button>
            );
          })}
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center space-x-3 bg-gradient-accent p-3 rounded-lg">
            <Button
              variant="ghost"
              size="sm"
              className="bg-gradient-rainbow hover:bg-gradient-success text-white p-2 rounded-full h-10 w-10 shadow-lg"
            >
              <span className="text-xl">{userAvatar}</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight capitalize bg-gradient-rainbow bg-clip-text text-transparent">
            {activeTab.replace('-', ' ')}
          </h2>
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-accent p-2 rounded-full shadow-lg">
              <Users className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm font-medium text-learning-purple">Level 5 Explorer</span>
          </div>
        </div>
        
        {/* Tab Content */}
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'documents' && <DocumentsTab />}
        {activeTab === 'assessments' && <AssessmentsTab />}
        {activeTab === 'analytics' && <AnalyticsTab />}
        {activeTab === 'achievements' && <AchievementsTab />}
      </div>
    </div>
  );
};

export default LearnWithFunPlatform;