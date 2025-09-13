import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye, Clock } from "lucide-react";

export const DocumentsTab = () => {
  const documents = [
    {
      title: "React Hooks Cheat Sheet",
      type: "PDF",
      size: "2.4 MB",
      course: "React Fundamentals",
      lastModified: "2 days ago",
      status: "New"
    },
    {
      title: "JavaScript ES6 Guide",
      type: "PDF",
      size: "1.8 MB",
      course: "JavaScript ES6+",
      lastModified: "1 week ago",
      status: "Updated"
    },
    {
      title: "CSS Grid Layout Examples",
      type: "HTML",
      size: "854 KB",
      course: "CSS Grid & Flexbox",
      lastModified: "3 days ago",
      status: "New"
    },
    {
      title: "Node.js Best Practices",
      type: "PDF",
      size: "3.2 MB",
      course: "Node.js Basics",
      lastModified: "5 days ago",
      status: ""
    },
    {
      title: "TypeScript Interface Guide",
      type: "MD",
      size: "567 KB",
      course: "TypeScript Essentials",
      lastModified: "1 week ago",
      status: "Popular"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "New":
        return <Badge className="bg-gradient-success text-white">New</Badge>;
      case "Updated":
        return <Badge className="bg-gradient-secondary text-white">Updated</Badge>;
      case "Popular":
        return <Badge className="bg-gradient-accent text-white">Popular</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="bg-gradient-primary bg-clip-text text-transparent">
            Learning Documents & Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Access your course materials, guides, and downloadable resources.
          </p>
        </CardContent>
      </Card>

      {/* Documents List */}
      <div className="grid gap-4">
        {documents.map((doc, index) => (
          <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-primary p-2 rounded-lg">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-foreground">{doc.title}</h4>
                      {doc.status && getStatusBadge(doc.status)}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{doc.course}</span>
                      <span>•</span>
                      <span>{doc.type} - {doc.size}</span>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{doc.lastModified}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button size="sm" className="bg-gradient-secondary text-white hover:opacity-90">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary p-2 rounded-md">
                <FileText className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">24</p>
                <p className="text-xs text-muted-foreground">Total Documents</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-secondary p-2 rounded-md">
                <Download className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">156</p>
                <p className="text-xs text-muted-foreground">Downloads</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-accent p-2 rounded-md">
                <Eye className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">89</p>
                <p className="text-xs text-muted-foreground">Views Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};