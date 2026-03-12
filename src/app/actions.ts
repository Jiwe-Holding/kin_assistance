"use server";

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { encrypt, TOKEN_NAME } from '@/lib/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function submitDemande(formData: FormData) {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const email = formData.get('email') as string;
  const service = formData.get('service') as string;
  const departure = formData.get('departure') as string;
  const destination = formData.get('destination') as string;
  const description = formData.get('description') as string;
  const urgency = formData.get('urgency') as string;

  try {
    const demande = await prisma.demande.create({
      data: {
        name,
        phone,
        email,
        service,
        departure: departure || null,
        destination: destination || null,
        description,
        urgency: urgency || 'normal',
        status: 'nouveau',
      } as any,
    });

    // Revalidate the admin pages to show the new request
    revalidatePath('/admin');
    revalidatePath('/admin/demandes');

    return { success: true, id: demande.id };
  } catch (error) {
    console.error('Error creating demande:', error);
    return { success: false, error: 'Failed to save request to database.' };
  }
}

export async function updateDemandeStatus(id: string, status: string) {
  try {
    await prisma.demande.update({
      where: { id },
      data: { status },
    });
    
    revalidatePath('/admin');
    revalidatePath('/admin/demandes');
    revalidatePath(`/admin/demandes/${id}`);

    return { success: true };
  } catch (error) {
    console.error('Error updating status:', error);
    return { success: false, error: 'Failed to update status.' };
  }
}

export async function loginAdmin(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (email === adminEmail && password === adminPassword) {
    // Session expires in 24 hours
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const session = await encrypt({ email, expires });

    // Save the session in a cookie
    const cookieStore = await cookies();
    cookieStore.set(TOKEN_NAME, session, {
      expires,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return { success: true };
  }

  return { success: false, error: "Identifiants invalides" };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(TOKEN_NAME);
  redirect("/admin/login");
}

