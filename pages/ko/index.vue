<template>
  <div>
    <Banner />
    <News />
    <People />
    <AcademicCalendar />
    <Notification />
    <SocialNetwork />
  </div>
</template>
<script setup>
import Banner from '~/components/HomePage/Banner.vue'
import News from '~/components/HomePage/News.vue'
import People from '~/components/HomePage/People.vue'
import Notification from '~/components/HomePage/Notification.vue'
import SocialNetwork from '~/components/HomePage/SocialNetwork.vue'
import AcademicCalendar from '~/components/HomePage/AcademicCalendar.vue'
definePageMeta({
  isSidebar: true,
});
</script>
