# Admin Panel Documentation

## Overview

The admin panel provides comprehensive content moderation and platform management capabilities for maintaining content quality and platform health.

## Features

### 🔐 Admin Authentication
- **Separate Admin Login**: Elevated access with additional security code
- **Route Protection**: Admin routes are protected with authentication guards
- **Session Management**: Secure admin session handling

**Demo Credentials:**
- Email: `admin@example.com`
- Password: `admin123`
- Admin Code: `ADMIN2024`

### 📊 Moderation Table
- **Advanced Filtering**: Filter by status, category, and search terms
- **Sorting**: Sort by uploader, category, and upload date
- **Bulk Actions**: Approve, reject, delete items with one click
- **Item Details**: View comprehensive item information
- **Flagged Content**: Special indicators for flagged items
- **Report Counts**: Display number of reports per item

### 📋 Reports Management
- **User Reports**: Track and manage user-submitted reports
- **Abuse Log**: Historical record of resolved reports
- **Priority Levels**: Urgent, High, Medium, Low priority classification
- **Report Types**: Inappropriate, Spam, Fake, Copyright, Other
- **Status Tracking**: Open, Investigating, Resolved, Dismissed
- **Admin Notes**: Add internal notes to reports
- **Resolution Tracking**: Record how reports were resolved

### ⚡ Quick Actions
- **Ban Users**: Temporary or permanent user bans with reasons
- **Warn Users**: Send warning messages to users
- **Delete Items**: Remove items with reason tracking
- **Confirmation Dialogs**: Prevent accidental actions
- **Recent Actions**: Track recent admin activities

## Component Structure

```
src/components/admin/
├── AdminLogin.tsx          # Admin authentication
├── AdminDashboard.tsx      # Main admin interface
├── AdminRouteGuard.tsx     # Route protection
├── ModerationTable.tsx     # Content moderation interface
├── Reports.tsx            # Reports and abuse management
└── QuickActions.tsx       # Fast action buttons
```

## Routes

- `/admin/login` - Admin authentication page
- `/admin/dashboard` - Main admin dashboard (protected)
- `/admin` - Legacy admin panel

## Usage Guide

### 1. Accessing the Admin Panel
1. Navigate to `/admin/login`
2. Enter admin credentials
3. You'll be redirected to the dashboard

### 2. Content Moderation
1. Go to the "Moderation" tab
2. Use filters to find specific items
3. Click approve (✓), reject (✗), or delete (🗑️) buttons
4. View item details by clicking the eye icon

### 3. Managing Reports
1. Go to the "Reports" tab
2. Filter by status, type, or priority
3. Click on reports to view details
4. Update status or add admin notes
5. Ban users directly from reports

### 4. Quick Actions
1. Go to the "Quick Actions" tab
2. Select a user or item (from other tabs)
3. Use ban, warn, or delete buttons
4. Confirm actions in the dialog

## Security Features

- **Elevated Authentication**: Requires admin code in addition to credentials
- **Route Protection**: Unauthorized users are redirected to login
- **Session Validation**: Admin sessions are validated on each page load
- **Action Logging**: All admin actions are logged for audit purposes

## Data Management

### Mock Data Structure
The admin panel includes realistic mock data for demonstration:

**Items:**
- Pending items awaiting approval
- Flagged items requiring attention
- Items with report counts
- Various categories and statuses

**Reports:**
- Different report types and priorities
- Various statuses (open, investigating, resolved)
- Admin notes and resolutions

## Styling and UI

- **Consistent Design**: Matches the main application's design system
- **Responsive Layout**: Works on desktop and mobile devices
- **Color Coding**: Different colors for different statuses and priorities
- **Interactive Elements**: Hover effects and smooth transitions
- **Loading States**: Proper loading indicators for async operations

## Future Enhancements

- **Real-time Updates**: WebSocket integration for live data
- **Advanced Analytics**: Detailed platform health metrics
- **Bulk Operations**: Select multiple items for batch actions
- **Export Functionality**: Export reports and data
- **Audit Trail**: Detailed logging of all admin actions
- **API Integration**: Connect to backend services

## Technical Implementation

### State Management
- Local state for UI interactions
- Mock data for demonstration
- Ready for API integration

### Error Handling
- Graceful error handling for failed operations
- User-friendly error messages
- Fallback states for missing data

### Performance
- Optimized rendering with React.memo
- Efficient filtering and sorting
- Lazy loading for large datasets

## Support

For technical support or feature requests, please refer to the main project documentation or contact the development team. 